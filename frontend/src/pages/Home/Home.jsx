import 'react'
import './Home.css'
import Header from '../../components/header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import { useState } from 'react'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
const Home = () => {

  const [category, setCategeory] = useState("ALL");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategeory={setCategeory} />
      <FoodDisplay category={category} />
    </div>
  )
}

export default Home
