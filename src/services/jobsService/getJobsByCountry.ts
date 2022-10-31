// https://www.getonbrd.com/api/v0/search/jobs?query=country:colombia&page=1&per_page=10&expand=["seniority"]

import { QueryJob, Response } from '../../models'
import axiosClient from '../apiConfig'

export async function getJobsByCountry(
    country: string,
    page: number
): Promise<Response<QueryJob[]>> {
    const perPage = 10
    const jobs = await axiosClient.get(
        `/search/jobs?query=country:${country}&page=${page}&per_page=${perPage}`
    )
    return jobs.data
}
