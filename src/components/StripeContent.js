import { stripeInfo } from "../data"
import phoneLogo from '../phone logo.svg'
const StripeContent = () => {


  return (
    <section className="stripe__content-wrapper">
      <div className="stripe__contents">
        <h1>Payments infrastructure for the internet</h1>
        <p>{stripeInfo.text}</p>
        <button className="start-btn">Start now</button>
      </div>
      <div className="stripe__phone">
        <img src={phoneLogo} alt="phone-logo" />
      </div>
    </section>
  )
}

export default StripeContent
