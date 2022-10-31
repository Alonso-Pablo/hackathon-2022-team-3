import { Fragment, useEffect, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { FilterAttributes, FilterBase } from '@/models/FilterBaseModels';


interface SelectProps<T> {
  text?: string
  options: T
  onChange: (id: string) => void
  by?: keyof FilterAttributes
}

export function Select<T extends Array<FilterBase>>({options, onChange, text, by}: SelectProps<T>) {
  const [selected, setSelected] = useState(options[0]);

  useEffect(() => {
    const filterBy = by && selected.attributes[by]
    const id = selected && selected.id

    onChange(filterBy || id);

  }, [selected]);

  return (
    <div className="w-72">
      <Listbox value={selected} onChange={setSelected}>
        <Listbox.Label>{text}</Listbox.Label>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selected.attributes.name}</span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {options.map((category) => (
                <Listbox.Option
                  key={category.id}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={category}
                >
                  {({ selected }) => (
                    <span
                      className={`block truncate ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}
                    >
                      {category.attributes.name}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}