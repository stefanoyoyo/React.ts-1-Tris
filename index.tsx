import React, { Component } from 'react';
import { render } from 'react-dom';
import { Tris } from './components/tris/tris';
import Hello from './Hello';
import './style.css';

interface AppProps { }
interface AppState {
  name: string;
  trisNumber: number
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
      trisNumber: 9
    };
  }

  render() {
    console.log(this.state);                
    return (      
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p> 
      <Tris 
        trisNumber={this.state.trisNumber} 
        squareText="x"
      />  
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
