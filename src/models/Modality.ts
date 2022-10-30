export interface Modality {
    id: string
    type: string
    attributes: {
        name: string
        locale_key: string
    }
    relationships: unknown
}
