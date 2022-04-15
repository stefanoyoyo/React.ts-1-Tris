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
    const els = Array(this.props.trisNumber).fill('empty');
    return  (
      <div>
        {
          els.map((el, index) => <button>{els[index]}</button> )
        }
      </div>
    )
  }
}