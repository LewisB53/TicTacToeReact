import React from 'react'
import {GridOption} from './GridOption.jsx'

class GameGrid extends React.Component {

  render() {

    const gridPositions = this.props.options.map((option, index) => {
      return <GridOption value={index} key= {index}> {index} </GridOption>
    })
    return(
      <div> 
        <h3> I am a game grid </h3>
        {gridPositions} 
      </div>
    )
  }

}

export default GameGrid;