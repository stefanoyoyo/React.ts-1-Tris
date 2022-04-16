import React=require("react");
import './square.css'

export interface AppProps {
  squareText: string,
  squareId: number,
  changeText: Function
}
export interface AppState{}

export class Square extends React.Component<AppProps, AppState> {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <button onClick={() => this.props.changeText(this.props.squareId)} >{this.props.squareText}</button>
    )
  }
}