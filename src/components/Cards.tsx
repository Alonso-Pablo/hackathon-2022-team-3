import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { getCategories } from '@/services';
import { Select, Field } from '@/components';
import { useSearchParams } from 'react-router-dom';
import { SelectOptionsModel } from '@/models/selectOptionsModel';
import { FilterModel } from '@/models/FilterModel';
import {
  getCompanies,
  getModalities,
  getPerks,
  getSeniorities,
} from '@/services/selectOptionsService';

export function Cards() {
  const { register, watch } = useForm<{ location: string }>({
    mode: 'onChange',
  });

  const [selectOptions, setSelectOptions] = useState<SelectOptionsModel>({});
  const [filterParams, setFilterParams] = useState<FilterModel>({});
  const [searchParams, setSearchParams] = useSearchParams();

  const location = watch('location');

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {});
    /* searchParams.delete('country'); */
    return () => subscription.unsubscribe();
  }, [watch]);

  const handleFilter = (param: FilterModel) => {
    const key = Object.keys(param)[0] as keyof typeof param;

    if (param[key]?.length === 0) {
      searchParams.delete(param[key] as string);
    }

    const newParams = { ...param };
    setSearchParams(newParams);
    setFilterParams(newParams);
  };

  useEffect(() => {
    handleFilter({ country: location });
  }, [location]);

  const getInitialFilters = async () => {
    const categoryResponse = await Promise.all([
      getCategories(),
      getSeniorities(),
      getModalities(),
      getCompanies(),
      getPerks(),
    ]);

    setSelectOptions({
      category: categoryResponse[0].data,
      seniority: categoryResponse[1].data,
      modality: categoryResponse[2].data,
      company: categoryResponse[3].data,
      perks: categoryResponse[4].data,
    });
  };

  useEffect(() => {
    getInitialFilters();
  }, []);

  return (
    <div className="flex justify-center px-20 flex-wrap gap-4">
      {selectOptions?.category && (
        <Select
          text="Categoría"
          options={selectOptions?.category}
          onChange={(selected) => handleFilter({ category: selected })}
        />
      )}
      {selectOptions?.modality && (
        <Select
          by="locale_key"
          text="Modalidad"
          options={selectOptions?.modality}
          onChange={(selected) => handleFilter({ modality: selected })}
        />
      )}
      {selectOptions?.company && (
        <Select
          text="Compañía"
          options={selectOptions?.company}
          onChange={(selected) => handleFilter({ company: selected })}
        />
      )}
      {selectOptions?.seniority && (
        <Select
          by="locale_key"
          text="Seniority"
          options={selectOptions?.seniority}
          onChange={(selected) => handleFilter({ seniority: selected })}
        />
      )}
      {selectOptions?.perks && (
        <Select
          text="Beneficios"
          options={selectOptions?.perks}
          onChange={(selected) => handleFilter({ perks: selected })}
        />
      )}
      <Field text="País" register={register('location', { required: true })} />
    </div>
  );
}
