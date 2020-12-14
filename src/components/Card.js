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
      case 'DragonBall Z':
        this.setState({
          characters: Data.filter(i => i.topic === 'Dragonball Z')
        })
        break
      case 'Star Wars':
        this.setState({
          characters: Data.filter(i => i.topic === 'Star Wars')
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

            <img src={img.url} alt={img.alt} />

            <div className="details">
              <p>{topic}</p>
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
      <>
        <div className="dropdown">
          <div>
            <select onChange={(val) => this.handleChange(val)}>
              <option>All</option>
              <option>DragonBall Z</option>
              <option>Star Wars</option>
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
