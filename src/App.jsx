import { Component } from "react";
import "./App.css"

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      value:""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event)=>{
    this.setState({
      value:event.target.value
    })
  }

  render(){
    return(
      <>
        <header className="heading">
          <h1>Kalvium Note App</h1>
        </header>

        <div className="distance" >
          <div className="input-box" onSubmit={this.handleSubmit}>
            <h3>Input</h3>
            <textarea className="input-txt" onChange={this.hanldeChange}/>
          </div>

          <div className="exit">
            <h3>Pro Note</h3>
            <div className="exit-text">
              <div className="text-color">
              {this.state.value}
              </div>
            </div>
          </div>
        </div>
</>
    )
  }
}