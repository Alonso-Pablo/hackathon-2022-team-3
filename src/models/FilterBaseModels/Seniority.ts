import { FilterBase } from './FilterBase';
export interface Seniority extends FilterBase {
  id: string
  type: 'seniority'
  attributes: {
    name: string
    locale_key: string
  }
  relationships: unknown
}
