import React, { useState } from 'react'
import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav.jsx'
import axios from 'axios'

//Paleta de colores: https://coolors.co/e63946-f1faee-a8dadc-457b9d-1d3557

function App() {
  const [cities, setCities] = useState([])

  async function onSearch(city) {
    const apiKey = '4ae2636d8dfbdc3044bede63951a019b'
    // fetch(
    //   `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.main !== undefined) {
    //       const newCity = {
    //         id: data.id,
    //         name: data.name,
    //         min: data.main.temp_min,
    //         max: data.main.temp_max,
    //         img: data.weather[0].icon,
    //       }
    //       if (cities.includes(newCity) === false) {
    //         setCities((currentCities) => [...currentCities, newCity])
    //       }
    //     } else {
    //       alert('Ciudad no encontrada')
    //     }
    //   })
    let cityInfo = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    )

    cityInfo = cityInfo.data

    console.log(cityInfo)
    if (cityInfo.main !== undefined) {
      const newCity = {
        id: cityInfo.id,
        name: cityInfo.name,
        min: cityInfo.main.temp_min,
        max: cityInfo.main.temp_max,
        img: cityInfo.weather[0].icon,
      }
      if (cities.includes(newCity) === false) {
        setCities((currentCities) => [...currentCities, newCity])
      }
    } else {
      alert('Ciudad no encontrada')
    }
  }

  function onClose(id) {
    setCities((cities) => cities.filter((city) => city.id !== id))
  }

  return (
    <div className='App'>
      <div>
        <Nav onSearch={onSearch} />
      </div>
      <hr />
      <div>
        <Cards cities={cities} onClose={onClose} />
      </div>
      <hr />
    </div>
  )
}

export default App
