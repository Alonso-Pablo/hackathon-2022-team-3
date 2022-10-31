import { Response } from '@/models'
import { Seniority } from '@/models/BaseModels'
import axiosClient from '../apiConfig'

export const getSeniorities = async (
    perPage = 100
): Promise<Response<Seniority[]>> => {
    const seniorities = await axiosClient.get(`/seniorities?per_page=${perPage}&page=1`)

    return seniorities.data
}
