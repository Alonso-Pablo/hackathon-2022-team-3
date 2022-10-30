import { useEffect, useState } from 'react'

import Search from '../Search'

import { truncate } from '@/utilities'
import { QueryJob } from '@/models'
import { queryJobByName } from '@/services'

export function Results() {
    let query = new URLSearchParams(window.location.search)

    //console.log(query)

    let keyword = query.get('name') as string

    //console.log(keyword);

    const [results, setResults] = useState<QueryJob[]>([])

    useEffect(() => {
        queryJobByName(keyword, 9).then((res) => {
            setResults(res.data)
        })
    }, [])

    return (
        <>
            <h2 className="subt__cat">
                <>Empleos encontrados para la busqueda: {results}</>
            </h2>

            <article className="container">
                {results.map((el, i) => {
                    return (
                        <div key={i} className="container__card">
                            <h1>{el.attributes.title}</h1>
                            <div className="container__description">
                                <p className="container__description-title">
                                    Descripcion:
                                </p>
                                {/*<p>{truncate(el.attributes.description, 150)}</p>*/}
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: truncate(
                                            el.attributes.description,
                                            150
                                        ),
                                    }}
                                ></p>
                            </div>

                            <div className="container__description">
                                <a
                                    href={el.links.public_url}
                                    target="blank"
                                    rel="noopener noreferrer"
                                >
                                    Visita esta oferta en GetOnBoard
                                </a>
                            </div>
                        </div>
                    )
                })}
            </article>

            <Search />
        </>
    )
}
