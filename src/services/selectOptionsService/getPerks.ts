import { Response } from '@/models'
import { Perk } from '@/models/FilterBaseModels'
import axiosClient from '../apiConfig'

export const getPerks = async (
    perPage = 100
): Promise<Response<Perk[]>> => {
    const categories = await axiosClient.get(`/perks`)

    return categories.data
}
