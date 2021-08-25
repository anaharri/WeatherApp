import React from 'react';
import styles from './Card.module.css'

export default function Card(props) {
  return (
    <div className={styles.card}>

      <div className={styles.header}>
        <h2>{props.name}</h2>
        <button className={styles.button} onClick={props.onClose}>X</button>
      </div>
      
      <div className={styles.bodyContainer}>
        <div className={styles.temp}>
          <p>Max:</p>
          <p>{props.max}°</p>
        </div>
        <div className={styles.temp}>
          <p>Min:</p>
          <p> {props.min}°</p>
        </div>
        <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="" />
      </div>
      
    </div>
    )
};