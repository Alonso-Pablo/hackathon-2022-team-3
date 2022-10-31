import { Company } from './../../models/Company';
import { Category, Response } from '@/models'
import axiosClient from '../apiConfig'

export const getCompanies = async (
    perPage = 100
): Promise<Response<Company[]>> => {
    const categories = await axiosClient.get(`/categories?per_page=${perPage}`)

    return categories.data
}
