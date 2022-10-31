import { getUniqueElements } from './../../utilities/getUniqueElements';
import { FilterModel } from '@/models/FilterModel'
import { QueryJob, Response } from '../../models'
import { getJobsByCategory } from './getJobsByCategory'
import { getJobsBySeniority } from './getJobsBySeniority'
import { getJobsByCompany } from './getJobsByCompany';
import { getJobsByCountry } from './getJobsByCountry';
import { getJobsByPerks } from './getJobsByPerks';

export async function getAllFilteredJobs(
  filterParams: FilterModel,  
  page: number
): Promise<QueryJob[]> {   
  try {
    const rawJobs = await Promise.all([
      filterParams?.category && getJobsByCategory(filterParams?.category, page),
      filterParams?.seniority && getJobsBySeniority(filterParams?.seniority, page),
      filterParams?.company && getJobsByCompany(filterParams?.company, page),
      filterParams?.country && getJobsByCountry(filterParams?.country, page),
      filterParams?.perks && getJobsByPerks(filterParams?.perks, page)
    ])

    const filteredJobs = rawJobs.filter((job): job is Response<QueryJob[]> => Boolean(job))
    const dataJobs = filteredJobs.map(elem => elem.data)
    const flatJobs = dataJobs.flat()
    // const uniqueJobs = getUniqueElements(flatJobs, 'id')
    return flatJobs
  }catch{
    return []
  }
}
