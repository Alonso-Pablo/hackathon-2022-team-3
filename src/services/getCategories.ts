import { Category, Response } from '@/models'
import axiosClient from './apiConfig'

export const getCategories = async (
    perPage = 100
): Promise<Response<Category[]>> => {
    const categories = await axiosClient.get(`/categories?per_page=${perPage}`)

    return categories.data
}
