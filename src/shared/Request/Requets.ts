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
		{ method = 'get', url, data, responseType = 'json' }: IRequestParams,
		options: AxiosRequestConfig & { mockData?: AxiosResponse } = {}
	): Promise<AxiosResponse> {
		const requestOptions = {
			method,
			url,
			data,
			responseType,
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

	getDowloadProgress(progressEvent: AxiosProgressEvent) {
		let percentCompleted = 0
		if (progressEvent.total !== undefined) {
			percentCompleted = Math.round(
				(progressEvent.loaded * 100) / progressEvent.total
			)
		}

		return percentCompleted
	}
}

export const request = new Request()
