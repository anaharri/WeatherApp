import React from 'react';
import Card from './Card'
import styles from './Cards.module.css'

export default function Cards({cities, onClose}) {
  if (cities.length > 0){
    return (
      <div className={styles.cardsContainer}> 
        {cities.map(city => 
          <Card 
          name={city.name} 
          max={city.max}
          min={city.min}
          img={city.img}
          onClose={() => onClose(city.id)}
          id={city.id}
          key={city.id}
          />
        )}
      </div>)
  } else {
    return (<h4 className={styles.noCities}>Sin ciudades</h4>)
  }
  
};