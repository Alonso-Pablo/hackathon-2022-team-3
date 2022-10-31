import { FilterBase } from '.';
export interface Company extends FilterBase {
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
        logo : {
            url: string
            thumb: {
                url: string
            }
        }
    }
    country: string
}
