import { useEffect, useState } from 'react';

import { getCategories } from '@/services';
import { Select } from '@/components';
import { useSearchParams } from "react-router-dom";
import { SelectOptionsModel } from '@/models/selectOptionsModel';
import { FilterModel } from '@/models/FilterModel';
import { getSeniorities } from '@/services/selectOptionsService';

export function Cards() {
  const [selectOptions, setSelectOptions] = useState<SelectOptionsModel>({});
  const [filterParams, setFilterParams] = useState<FilterModel>({});
  const [_, setSearchParams] = useSearchParams();

  const handleFilter = (param: { category?: string, seniority?: string }) => {
    const newParams = { ...filterParams, ...param };
    setSearchParams(newParams);
    setFilterParams(newParams);
  };

  useEffect(() => {
    const getInitialFilters = async () => {
      const categoryResponse = await Promise.all([getCategories(), getSeniorities()])
      setSelectOptions({
        category: categoryResponse[0].data,
        seniority: categoryResponse[1].data
      });
    }
    getInitialFilters()
  }, []);

  return (
    <>
      {selectOptions?.category && (<Select text="Category" options={selectOptions?.category} onChange={(selected) => handleFilter({ category: selected })} />)}
      {selectOptions?.seniority && (<Select name text="Seniority" options={selectOptions?.seniority} onChange={(selected) => handleFilter({ seniority: selected })} />)}
    </>
  );

}
