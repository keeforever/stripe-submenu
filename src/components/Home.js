import NavBar from './NavBar'
import StripeContent from './StripeContent';
import FloatMenu from './FloatMenu';
import {useGlobalContext} from '../context'

const Home = () => {
  const {onOutCursor}=useGlobalContext();
  return (
    <main >
      <NavBar />
      <FloatMenu />
      <StripeContent/>
    </main>
  )
}

export default Home
