import React = require('react');
import { Square } from '../square/square';
import './tris.css';

export interface AppProps {
  squareText: string;
  trisNumber: number;
  changeText: Function;
}
export interface AppState {
  trisGrid: string[]
}

export class Tris extends React.Component<AppProps, AppState> {
  props: any;

  constructor(props) {
    super(props);
    this.state = {
      trisGrid: Array(props.trisNumber).fill('')
    }
  }

  changeText(index: number) {
    let trisGrid = Object.assign(this.state.trisGrid);
    trisGrid[index] = this.props.squareText;
    this.setState({
      trisGrid: trisGrid
    });
    console.log(this.state.trisGrid);
  }

  render() {
    /* Implementing angular *ngFor creating an array 
    having the given number of elements and then using 
    the map method on it. */
    return (
      <div className="tris-grid">
        {this.state.trisGrid.map((el, index) => (
          <Square
            squareText={this.state.trisGrid[index]}
            changeText={(index) => this.changeText(index)}
            squareId={index}
          />
        ))}
      </div>
    );
  }
}
