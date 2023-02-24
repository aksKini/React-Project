import React, { Component } from 'react'
import { faker } from '@faker-js/faker';

export default class Faker extends Component {

    constructor(){
        super()
        this.state={
            img:faker.image.cats()
        }
    }

    handleChange=()=>{
        this.setState({
            img:faker.image.avatar()
        })
    }

  render() {
    return (
      <div>
        <img src={this.state.img} alt="" />
        <button onClick= {this.handleChange}>CHANGE IMG</button>
      </div>
    )
  }
}
