import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Category } from '@/models'
import { getCategories } from '../../../../services'

export function Card() {
    const [category, setCategory] = useState<Category[]>([])

    useEffect(() => {
        getCategories().then((response) => setCategory(response.data))
    }, [])

    return (
        <article className="container ">
            {category.map((category) => {
                return (
                    <Link
                        to={`/categories?categoryID=${category.id}`}
                        className="card__cat"
                        id={category.id}
                    >
                        <h1>{category.attributes.name}</h1>
                    </Link>
                )
            })}
        </article>
    )
}
