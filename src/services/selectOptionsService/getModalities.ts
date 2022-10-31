//https://www.getonbrd.com/api/v0/modalities?per_page=10&page=1
import { Modality, Response } from '@/models'
import axiosClient from '../apiConfig'

export const getModalities = async (
    perPage = 100
): Promise<Response<Modality[]>> => {
    const categories = await axiosClient.get(`/modalities?per_page=${perPage}`)

    return categories.data
}
