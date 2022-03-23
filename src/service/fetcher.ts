import axios, { AxiosError } from 'axios';

const responseErrorHandler = (error: AxiosError): Promise<AxiosError> => {
	if (error.response) {
		if (typeof window === 'undefined') {
			throw new Error();
		} else {
			window.location.href = '/500';
		}
	}

	return Promise.reject(error);
};

export const fetcher = axios.create();

fetcher.interceptors.response.use((response) => response, responseErrorHandler);
