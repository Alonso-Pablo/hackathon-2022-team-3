import { QueryJob, Response } from '../models'
import axiosClient from './apiConfig'

export async function queryJobByName(
    query: string,
    perPage = 9,
    page?: number
): Promise<Response<QueryJob[]>> {
    const jobs = await axiosClient.get(
        `/search/jobs?query=${query}&per_page=${perPage}&page=${page}`
    )

    return jobs.data
}
