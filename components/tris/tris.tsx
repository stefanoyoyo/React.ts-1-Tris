import React=require("react");
import { Square } from "../square/square";
import './tris.css';

export interface AppProps {
  squareText: string
}
export interface AppState{}

export class Tris extends React.Component<AppProps, AppState> {
  props: any;

  constructor(props) {
    super(props);
  }

  render() {
    /* Implementing angular *ngFor creating an array 
    having the given number of elements and then using 
    the map method on it. */
    const els = Array(this.props.trisNumber).fill('');
    return  (
      <div className="tris-grid">
        {
          els.map((el, index) => <Square squareText="ciao" /> )
        }
      </div>
    )
  }
}