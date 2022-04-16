import React=require("react");
import './square.css'

export interface AppProps {
  squareText: string
}
export interface AppState{}

export class Square extends React.Component<AppProps, AppState> {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <button>{this.props.squareText}</button>
    )
  }
}