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
    const els = Array(this.props.trisNumber).fill('');
    return  (
      <div className="tris-grid">
        {
          els.map((el, index) => <button className="square">{els[index]}</button> )
        }
      </div>
    )
  }
}