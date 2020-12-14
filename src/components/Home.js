import React from 'react'
import Card from './Card';
import Footer from './Footer'

export default function Home() {
  return (
    <div className="home">
      <section className="slogan">
        <h3>Free Wallpaper Backgrounds!</h3>
      </section>

      <section className="main">
        <Card />
      </section>

      <section className="footer">
        <Footer />
      </section>
    </div>
  )
}
