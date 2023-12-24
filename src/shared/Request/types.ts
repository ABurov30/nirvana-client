import { AxiosRequestConfig } from 'axios'

export interface IRequestParams {
	method?: AxiosRequestConfig['method']
	url: string
	data?: AxiosRequestConfig['data']
    useMock?: boolean
}


