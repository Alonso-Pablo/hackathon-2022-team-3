export interface FilterAttributes {
  name: string
  locale_key?: string
}

export interface FilterBase {
  id: string;
  type: string
  attributes: FilterAttributes
}