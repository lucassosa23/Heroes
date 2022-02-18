import { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from "query-string"
import { useForm } from '../../Hooks/UseForm';
import { getHeroesByName } from '../../selectors/GetHeroesByName';
import { HeroCard } from '../Hero/HeroCard';


export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();
  
  const { q = "" } = queryString.parse(location.search)

  const [formValues, handleInputChange] = useForm({
    searchText: q,
  })

const {searchText} = formValues;

const heroesFilter = useMemo(() => getHeroesByName(q), [q]);

const handleSearch = (e) =>{
  e.preventDefault();
  navigate(`?q=${ searchText }`);
 
}

  return (
  <>
      <h1>Search </h1>
      <div className='row'>
        <div className='col-5'>
          <h4>Search</h4>
          <hr/>
          <form onSubmit={handleSearch}>
            <input
            type="text"
            placeholder='Buscar un heroe'
            className='form-control'
            name='searchText'
            autoComplete='off'
            value={searchText}
            onChange={handleInputChange}
            />

            <button className='btn btn-outline-primary mt-1'
                    type='submit'              
              >
              Buscar...
            </button>
          </form>
        </div>
        <div className='col-7'>
          <h4>Resultados</h4>
          <hr/>
          {
            (q==="") 
              ? <div className='alert alert-info'> Buscar un Heroe</div>
              : (heroesFilter.length === 0 )
                && <div className='alert alert-danger'>No hay resultados: {q} </div>
          }
            {
              heroesFilter.map(hero=>(
                  <HeroCard
                  key={hero.id}
                  {...hero}
                  />
                  ))
            }
        </div>
      </div>  
  </>
  );
};
