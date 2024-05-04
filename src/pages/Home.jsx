import React from 'react'
import Hero from '../containers/hero/Hero'
import TrendingNews from '../containers/trendingNews/TrendingNews'
import EditorialPicks from '../containers/editorialPicks/EditorialPicks'
import Categories from '../containers/categories/Categories'
import Ceo from '../containers/ceo/Ceo'

const Home = () => {
  return (
    <div>
      <Hero />
      <TrendingNews />
      <EditorialPicks />
      <Categories />
      <Ceo />
    </div>
  )
}

export default Home
