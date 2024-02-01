import axios, {
	type AxiosProgressEvent,
	type AxiosRequestConfig,
	type AxiosResponse
} from 'axios'
import MockAdapter from 'axios-mock-adapter'

import { type IRequestParams } from './types'

const NewInstanse = axios.create({
	// @ts-ignore
	baseURL: import.meta.env.VITE_BASE_URL,
	withCredentials: true
})

class Request {
	private readonly controller = new AbortController()
	private readonly mock = new MockAdapter(axios)

	async sendRequest(
		{
			method = 'get',
			url,
			data,
			useMock,
			responseType = 'json'
		}: IRequestParams,
		options: AxiosRequestConfig & { mockData?: AxiosResponse } = {}
	): Promise<AxiosResponse> {
		if (useMock) {
			this.useMock(options.mockData)
		}

		const requestOptions = {
			method,
			url,
			data,
			responseType,
			signal: this.controller.signal,
			onUploadProgress: this.getUploadProgress,
			onDownloadProgress: this.getDowloadProgress,
			...options
		}
		// @ts-ignore
		return await NewInstanse(requestOptions)
			.then(function (response: AxiosResponse) {
				return response
			})
			.catch(error => error.response)
	}

	cancelRequest() {
		this.controller.abort()
	}

	getUploadProgress(progressEvent: AxiosProgressEvent) {
		let percentCompleted = 0

		if (progressEvent.total !== undefined) {
			percentCompleted = Math.round(
				(progressEvent.loaded * 100) / progressEvent.total
			)
		}

		return percentCompleted
	}

	getDowloadProgress(progressEvent: AxiosProgressEvent) {
		let percentCompleted = 0

		if (progressEvent.total !== undefined) {
			percentCompleted = Math.round(
				(progressEvent.loaded * 100) / progressEvent.total
			)
		}

		return percentCompleted
	}

	useMock(mockData?: AxiosResponse) {
		this.mock.reset()
		this.mock.onAny().reply((config: AxiosRequestConfig) => {
			const { method, url } = config
			const key = `${method?.toLocaleUpperCase()} ${url}`

			const data = (this.mock as any)._mocked[key]

			if (data) {
				return [200, data]
			}

			return [404, {}]
		})
	}
}

export const request = new Request()
