import React from 'react'
import GameGrid from '../components/GameGrid.jsx'
import GridOption from '../components/GridOption.jsx'

class GameContainer extends React.Component{


constructor(props){
super(props)
this.state = {
  options : [null,null,null,null,null,null,null,null,null],
  player : "player1",
  choice: "x"
  }
}


render(){

return (
  <div> 
  <h3> Yo I'm a Message </h3>

  <GameGrid options = {this.state.options} />
  </div>
)
}


};

export default GameContainer;