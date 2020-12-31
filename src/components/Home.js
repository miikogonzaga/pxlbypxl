import React from 'react'
import Card from './Card';
import Footer from './Footer'

export default function Home() {
  return (
    <div className="home">
      <section className="slogan">
        <h2><span className="free">FREE</span> Wallpaper Backgrounds</h2>
        <div className="sellingPoints">
          <div style={{ background: '#f7f7f7' }}>
            <p>
              <b>1.</b>
            </p>
            <h3><span role="img" aria-label="Eyeballs">👀</span> Browse</h3>
          </div>
          <div style={{ background: '#FEFEFE' }}>
            <p>
              <b>2.</b>
            </p>
            <h3><span role="img" aria-label="Smartphone">📲</span> Save</h3>
          </div>
        </div>
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
