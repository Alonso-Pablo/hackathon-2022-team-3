import { QueryJob, Response } from '../../models'
import axiosClient from '../apiConfig'

export async function getJobsByModality(
    modality: string,
    page: number
): Promise<Response<QueryJob[]>> {
    const perPage = 10
    const jobs = await axiosClient.get(
        `/search/jobs?query=modality:${modality}&page=${page}&per_page=${perPage}`
    )
    return jobs.data
}
