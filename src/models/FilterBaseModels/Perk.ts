import { FilterBase } from "./FilterBase"

export interface Perk extends FilterBase {
  id: string
  type: 'perk'
  attributes: {
    name: string
    description: string
  }
}