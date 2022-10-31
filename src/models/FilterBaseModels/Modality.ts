import { FilterBase } from "./FilterBase"

export interface Modality extends FilterBase {
    id: string
    type: string
    attributes: {
        name: string
        locale_key: string
    }
    relationships: unknown
}
