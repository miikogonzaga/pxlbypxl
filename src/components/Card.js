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
    switch (val.target.value) {
      case 'All':
        this.setState({
          characters: Data
        })
        break
      case 'Pokémon':
        this.setState({
          characters: Data.filter(i => i.topic === 'Pokémon')
        })
        break
      case 'Dragonball Z':
        this.setState({
          characters: Data.filter(i => i.topic === 'Dragonball Z')
        })
        break
      default:
        this.setState({
          characters: Data
        })
        break
    }
  }

  renderCharacters() {
    if (this.state.characters) {
      return this.state.characters.map(({
          img,
          topic,
          name
        }) => (
          <div className="card" key={img.alt}>
            <span>Free</span>

            <img
              src={img.url}
              alt={img.alt}
              style={{ maxWidth: 500 }}/>

            <div className="details">
              <p>{topic}</p>
              <h2>{name}</h2>
            </div>

            <a href={img.wallpaper} download={img.wallpaper}>
              Save {name}
            </a>
          </div>
        )
      )
    }
  }

  render() {
    return (
      <>
        <div className="dropdown">
          <div>
            <select onChange={(val) => this.handleChange(val)}>
              <option>All</option>
              <option>Pokémon</option>
              <option>Dragonball Z</option>
            </select>
          </div>

          <div className="results">
            {this.state.characters.length === 1 ?
              <p>(1) result</p> :
              <p>({this.state.characters.length}) results</p> }
          </div>
        </div>

        <section className="characters">
          {this.renderCharacters()}
        </section>
      </>
    )
  }
}
