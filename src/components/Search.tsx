import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';
import { Input } from './Input';

interface Query {
  keyword: string;
}

export function Search() {
  const navigate = useNavigate();

  const onSubmit = ({ keyword }: Query) => {
    console.log(`ESTA ES LA KEYWORD ${keyword}`);
    if (keyword.length === 0) {
      console.warn(<h5>Ingrese una busqueda...</h5>);
    } else {
      navigate(`/query/${keyword}`);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Query>({ mode: 'onTouched' });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        register={register('keyword', { required: true })}
        type="text"
        placeholder="Buscar por palabra clave..."
      />

      <Button disabled={isSubmitting} type="submit">
        Buscar
      </Button>
    </form>
  );
}
