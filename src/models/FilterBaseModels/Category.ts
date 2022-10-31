import { FilterBase } from './FilterBase';
export interface Category extends FilterBase {
    id: string
    type: 'category'
    attributes: {
        name: string
        dimension: string
    }
}
