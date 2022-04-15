import React=require("react");

export class Tris extends React.Component {
  props: any;

  constructor(props) {
    super(props);
  }

  render() {
    return <button>{this.props.trisNumber}</button>
  }
}