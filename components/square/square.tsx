import React=require("react");
import './square.css'

export interface AppProps {
  squareText: string,
  changeText: Function
}
export interface AppState{}

export class Square extends React.Component<AppProps, AppState> {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <button onClick={() => this.props.changeText(2)} >{this.props.squareText}</button>
    )
  }
}