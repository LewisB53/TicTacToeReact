import React from 'react'

class GridOption extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      selectedOption: undefined,
      showImage: false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    console.log("YAY!")
    const newOption = event.target.value
    this.setState({
      selectedOption: "X",
      showImage: !this.state.showImage
    })
  
  }


  render(){
    let image = ""
    // if(!this.props.option) return null
    if (this.state.showImage) { 
      image = "x" 
    }

    return(
      <div className ="option" onClick ={this.handleChange}> {this.gridPositions} {this.selectedOption}
      {image}
      </div>

    )
  }

}

export default GridOption
