import { QueryJob, Response } from '../../models'
import axiosClient from '../apiConfig'

export async function getJobsByCategory(
    category: string,
    page: number
): Promise<Response<QueryJob[]>> {
    const perPage = 9
    const jobs = await axiosClient.get(
        `/categories/${category}/jobs?per_page=${perPage}&page=${page}`
    )
    return jobs.data
}
