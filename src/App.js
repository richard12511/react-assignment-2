import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Validation/ValidationComponent';
import ValidationComponent from './Validation/ValidationComponent';
import CharComponent from './Chars/CharComponent';

class App extends Component {

  state = {
    text: ''
  }

  onChangedHandler = (event) => {
    this.setState({ text: event.target.value })
  }

  deleteCharHandler = (event, index) => {
    const newText = [...this.state.text]
    newText.splice(index, 1)
    const newString = newText.join('')
    this.setState({ text: newString })
  }

  render() {
    let charComponentsJsx = null;
    if (this.state.text.length > 0) {
      charComponentsJsx = this.state.text.split('').map((char, index) => {
        return <CharComponent char={char} click={(event) => { this.deleteCharHandler(event, index) }} />
      })
    }

    return (
      <div className="App">
        <input id='theInput' className="margin-10" value={this.state.text} onChange={this.onChangedHandler}></input>
        <p className="margin-10" id="theText"></p>
        <ValidationComponent textLength={this.state.text.length} />
        {charComponentsJsx}
      </div>
    );
  }
}

export default App;
