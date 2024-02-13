import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios'

import { type IRequestParams } from './types'

const NewInstanse = axios.create({
	//@ts-ignore
	baseURL: import.meta.env.VITE_BASE_URL,
	withCredentials: true
})

class Request {
	async sendRequest(
		{ method = 'get', url, data, responseType = 'json' }: IRequestParams,
		options: AxiosRequestConfig
	): Promise<AxiosResponse> {
		const requestOptions = {
			method,
			url,
			data,
			responseType,
			...options
		}
		//@ts-ignore
		return await NewInstanse(requestOptions)
			.then(function (response: AxiosResponse) {
				return response
			})
			.catch(error => error.response)
	}
}

export const request = new Request()
