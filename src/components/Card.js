import React, { Component } from 'react';
import Data from './Data';
import '../index.scss';

export default class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      characters: Data,
    }
  }

  componentDidMount() {
    this.setState({
      characters: Data
    })
  }

  handleChange = (val) => {
    if (val.target.value === 'All') {
      this.setState({
        characters: Data
      })
    }

    if (val.target.value === 'DragonBall Z') {
      this.setState({
        characters: Data.filter(i => i.topic === 'Dragonball Z')
      })
    }

    if (val.target.value === 'Dragonball') {
      this.setState({
        characters: Data.filter(i => i.topic === 'Dragonball')
      })
    }
  }

  renderCharacters() {
    if (this.state.characters) {
      return this.state.characters.map(({
          img,
          topic,
          name
        }) => (
          <div className="card" key={name}>
            <span>Free</span>

            <img src={img.url} alt={img.alt} />

            <div className="details">
              <small>{topic}</small>
              <h2>{name}</h2>
            </div>

            <a href={img.url} download={img.url}>
              Save {name}
            </a>
          </div>
        )
      )
    }
  }

  render() {
    return (
      <div>
        <select onChange={(val) => this.handleChange(val)}>
          <option>All</option>
          <option>DragonBall Z</option>
          <option>Dragonball</option>
          <option>Star Wars</option>
        </select>

        {this.renderCharacters()}
      </div>

    )
  }
}
