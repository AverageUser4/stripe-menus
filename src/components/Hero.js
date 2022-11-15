import React from 'react'
import phoneImg from '../resources/phone.svg'

const Hero = () => {
  return (
    <main className="hero">

      <div className="hero-center">

        <article className="hero-info">

          <h1>Payments infrastructurefor the internet</h1>

          <p>Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.</p>

          <button className="btn">Start now</button>

        </article>

        <div className="hero-images">

          <img className="phone-img" src={phoneImg}/>

        </div>

      </div>

    </main>
  );
}

export default Hero
