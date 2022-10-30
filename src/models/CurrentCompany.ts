export interface CurrentCompany {
    id: string
    type: string
    attributes: {
        name: string
        description: string
        long_description: string | null
        projects: unknown | null
        benefits: unknown | null
        web: string
        twitter: string
        github: string
        facebook: string
        angellist: string
        logo: {
            url: string
            thumb: {
                url: string
            }
        }
        country: string
    }
}
