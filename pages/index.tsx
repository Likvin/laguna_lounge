import type { NextPage } from 'next'
import { Navpanel} from '../ui/NavPanel/'
import { GiBlackSea } from 'react-icons/gi'

const Home: NextPage = () => {
  return (
    <>
      <Navpanel name="Laguna_Lounge" icon ={<GiBlackSea/>}/>    
    </>
  )
}

export default Home
