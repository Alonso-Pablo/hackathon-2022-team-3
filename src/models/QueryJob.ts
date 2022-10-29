export interface QueryJob {
    id: string
    type: string
    attributes: {
        title: string
        description_headline: string
        functions_headline: string
        functions: string
        benefits_headline: string
        benefits: string
        desirable_headline: string
        desirable: string
        remote: false
        remote_modality: string
        remote_zone: null
        country: string
        category_name: string
        perks: string[]
        min_salary: null | number
        max_salary: null | number
        modality: string
        seniority: string
        published_at: number
        company: {
            data: {
                id: string
                type: string
                attributes: {
                    name: string
                    description: string
                    long_description: string
                    projects: string
                    benefits: string
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
                relationships: unknown
            }
        }
    }
    links: {
        public_url: string
    }
}
