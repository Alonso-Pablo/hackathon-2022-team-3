import { QueryJob, Response } from '../../models'
import axiosClient from '../apiConfig'

export async function getJobsBySeniority(
    seniority: string,
    page: number
): Promise<Response<QueryJob[]>> {
    const perPage = 10
    const jobs = await axiosClient.get(
        `/search/jobs?query=seniority:${seniority}&page=${page}&per_page=${perPage}`
    )
    return jobs.data
}
