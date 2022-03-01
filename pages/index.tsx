import type { NextPage } from 'next'
import { Navpanel, Carousel } from '../ui'
import { GiBlackSea } from 'react-icons/gi'

const IMAGES = [
  "/carousel/6.jpg",
  "/carousel/7.jpg",
  "/carousel/8.jpg"
]

const Home: NextPage = () => {
  return (
    <>
      <Navpanel name="Laguna_Lounge" icon ={<GiBlackSea/>}/>
      <Carousel images={IMAGES} />
      <h1>Здесь будет продолжение</h1>
      <h2>Здесь будет продолжение</h2>
      <h3>Здесь будет продолжение</h3>
    </>
  )
}

export default Home
