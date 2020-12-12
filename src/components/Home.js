import React, { Component } from 'react'
import Card from './Card';

export default class Home extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className="home">

        <section className="slogan">
          <h3>Free Wallpaper Backgrounds!</h3>
        </section>

        <Card />
      </div>
    )
  }
}
