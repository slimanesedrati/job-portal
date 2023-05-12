import axios, { AxiosResponse, AxiosError } from 'axios'

const BASEURL:string = "http://127.0.0.1:8000/api"

export function getBaseUrl(): string {
    return BASEURL
}

export const getFetcher = (url:string) => axios.get(url).then((res) => res.data)


export const createNewCompany = async (data: FormData):Promise<AxiosResponse | AxiosError> => {
    try {
        const response = await axios.post(`${BASEURL}/companies/`, data);
        return response

    } catch (error) {
        return error as AxiosError;
    }
}

export const createNewStudent = async (data: FormData):Promise<AxiosResponse | AxiosError> => {
    try {
        const response = await axios.post(`${BASEURL}/students/`, data);
        return response

    } catch (error) {
        return error as AxiosError;
    }
}