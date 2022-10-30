import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

interface Query {
    keyword: string
}

const Search = () => {
    const navigate = useNavigate()

    const onSubmit = ({ keyword }: Query) => {
        console.log(`ESTA ES LA KEYWORD ${keyword}`)
        if (keyword.length === 0) {
            console.warn(<h5>Ingrese una busqueda...</h5>)
        } else {
            navigate(`/results?name=${keyword}`)
        }
    }

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<Query>({ mode: 'onTouched' })

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                {...register('keyword', { required: true })}
                type="text"
                name="keyword"
                placeholder="Buscar por palabra clave..."
            />

            <button disabled={isSubmitting} type="submit">
                Buscar
            </button>
        </form>
    )
}

export default Search
