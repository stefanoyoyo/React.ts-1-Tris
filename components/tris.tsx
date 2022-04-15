import React=require("react");
import './tris.css';

export class Tris extends React.Component {
  props: any;

  constructor(props) {
    super(props);
  }

  render() {
    /* Implementing angular *ngFor creating an array 
    having the given number of elements and then using 
    the map method on it. */
    const els = Array(this.props.trisNumber).fill(null);
    let html = null;
    return  (
      <div>
        {
          els.map(() => <button>{this.props.trisNumber}</button> )
        }
      </div>
    )
  }
}