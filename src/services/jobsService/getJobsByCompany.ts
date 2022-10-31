import { QueryJob, Response } from '../../models'
import axiosClient from '../apiConfig'

export async function getJobsByCompany(
    company: string,
    page: number
): Promise<Response<QueryJob[]>> {
    const perPage = 10
    const jobs = await axiosClient.get(
        `companies/${company}/jobs?per_page=${perPage}&page=${page}`
    )
    
    return jobs.data
}
