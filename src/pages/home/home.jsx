import React from 'react'
import NewAddes from '../../components/cards/new-addes/new-addes'
import Category from '../../components/category/category'
import Hero from '../../components/hero/hero'
import Rucuns from '../../components/rucuns/rucuns'
import Service from '../../components/service/service'

const Home = () => {
  return (
    <div >
        <Category/>
        <Hero/>
        <Service/>
        <Rucuns/>
        <NewAddes/>
    </div>
  )
}

export default Home
