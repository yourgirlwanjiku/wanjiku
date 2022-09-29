import React from 'react'
import Cards from '../componet/Cards'
import Corasel from '../componet/Corasel'
import NavigationBar from '../componet/NavigationBar'


export default function Homepage() {
  return (
    <div>
        <NavigationBar/>
        <Corasel/>
        <Cards/>
    </div>
  )
}
