import { QueryJob, Response } from '../models'
import axiosClient from './apiConfig'

export async function getJobsByCategory(
    category: string,
    perPage = 9,
    page: number
): Promise<Response<QueryJob[]>> {
    const jobs = await axiosClient.get(
        `/categories/${category}/jobs?per_page=${perPage}&page=${page}`
    )
    console.log(jobs)

    return jobs.data
}
