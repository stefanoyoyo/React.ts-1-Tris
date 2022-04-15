import React, { Component } from 'react';
import { render } from 'react-dom';
import { Tris } from './components/tris';
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
      trisNumber: 3
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      <Tris trisNumber={this.state.trisNumber}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
