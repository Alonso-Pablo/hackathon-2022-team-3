export interface Tag {
    id: string
    type: string
    attributes: {
        name: string
        keywords: string
    }
    relationships: unknown
}
