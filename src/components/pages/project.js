import React, { Component } from 'react'

export default class project extends Component {
  render() {
    const style = {

      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '50%',

      textAlign: 'center',

  }
    return (
      <div style={style}>
       <h1>{this.props.title}</h1>

      </div>
    )
  }
}

