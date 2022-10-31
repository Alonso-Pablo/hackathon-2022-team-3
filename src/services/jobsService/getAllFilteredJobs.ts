import { getUniqueElements } from './../../utilities/getUniqueElements';
import { FilterModel } from '@/models/FilterModel'
import { QueryJob, Response } from '../../models'
import axiosClient from '../apiConfig'
import { getJobsByCategory } from './getJobsByCategory'
import { getJobsBySeniority } from './getJobsBySeniority'

export async function getAllFilteredJobs(
  filterParams: FilterModel,  
  page: number
): Promise<QueryJob[]> {
  const perPage = 10
   
  try {
    const rawJobs = await Promise.all([
      filterParams?.category && getJobsByCategory(filterParams?.category, page),
      filterParams?.seniority && getJobsBySeniority(filterParams?.seniority, page)
    ])
    const filteredJobs = rawJobs.filter((job): job is Response<QueryJob[]> => Boolean(job))
    const dataJobs = filteredJobs.map(elem => elem.data)
    const flatJobs = dataJobs.flat()
    return flatJobs
  }catch{
    return []
  }
}
