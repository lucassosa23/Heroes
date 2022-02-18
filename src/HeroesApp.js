import React from 'react';
import { Provider } from 'react-redux';
import { AppRouters } from './routers/AppRouters';
import { store } from './store/store';


export const HeroesApp = () => {
  return (
      <Provider store={ store }>
        <AppRouters/>
      </Provider>
    
  )
 
  
  
};
