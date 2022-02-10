import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ( {publisher}) => {
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]) 
  return <div className='animate__animated animate__fadeIn'>
  <h1>
      HeroList - {publisher}
  </h1>
  
      {
          heroes.map(hero=>(
        <HeroCard key= {hero.id}
            {...hero}
            />
        
          ))
      }
      
  

  </div>
};
