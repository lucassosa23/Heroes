import React from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ( {publisher}) => {
    const heroes = getHeroesByPublisher(publisher)
  return <div className='row row-cols-1 row row-cols-md-3 g-3'>
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
