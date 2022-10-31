import { useEffect, useState } from 'react';

import { getCategories } from '@/services';
import { Select } from '@/components';
import { useSearchParams } from "react-router-dom";
import { SelectOptionsModel } from '@/models/selectOptionsModel';
import { FilterModel } from '@/models/FilterModel';
import { getCompanies, getModalities, getPerks, getSeniorities } from '@/services/selectOptionsService';

export function Cards() {
  const [selectOptions, setSelectOptions] = useState<SelectOptionsModel>({});
  const [filterParams, setFilterParams] = useState<FilterModel>({});
  const [_, setSearchParams] = useSearchParams();

  const handleFilter = (param: FilterModel) => {
    // const newParams = { ...filterParams, ...param };
    const newParams = { ...param };
    setSearchParams(newParams);
    setFilterParams(newParams);
  };

  useEffect(() => {
    const getInitialFilters = async () => {
      const categoryResponse = await Promise.all([getCategories(), getSeniorities(), getModalities(), getCompanies(), getPerks()])
      setSelectOptions({
        category: categoryResponse[0].data,
        seniority: categoryResponse[1].data,
        modality: categoryResponse[2].data,
        company: categoryResponse[3].data,
        perks: categoryResponse[4].data,
      });
    }
    getInitialFilters()
  }, []);

  return (
    <>
      {selectOptions?.category && (<Select text="Category" options={selectOptions?.category} onChange={(selected) => handleFilter({ category: selected })} />)}
      {selectOptions?.modality && (<Select by='locale_key' text="Modality" options={selectOptions?.modality} onChange={(selected) => handleFilter({ modality : selected })} />)}
      {selectOptions?.company && (<Select text="Company" options={selectOptions?.company} onChange={(selected) => handleFilter({ company: selected })} />)}
      {selectOptions?.seniority && (<Select by='locale_key' text="Seniority" options={selectOptions?.seniority} onChange={(selected) => handleFilter({ seniority: selected })} />)}
      {selectOptions?.perks && (<Select text="Perk" options={selectOptions?.perks} onChange={(selected) => handleFilter({ perks: selected })} />)}
    </>
  );

}
