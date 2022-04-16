import React=require("react");
import { Square } from "../square/square";
import './tris.css';

export interface AppProps {
  squareText: string,
  changeText: Function
}
export interface AppState{}

export class Tris extends React.Component<AppProps, AppState> {
  props: any;
  trisGrid = [];

  constructor(props) {
    super(props);
  }

  changeText(index: number) {
    console.log('fire')
    this.trisGrid[index] = 'x';
  }

  render() {
    /* Implementing angular *ngFor creating an array 
    having the given number of elements and then using 
    the map method on it. */
    this.trisGrid = Array(this.props.trisNumber).fill('ciao');
    return  (
      <div className="tris-grid">
        {
          this.trisGrid.map((el, index) => 
          <Square 
            changeText={() => this.changeText(index)} 
            squareText={this.trisGrid[index]} /> 
            )
        }
      </div>
    )
  }
}