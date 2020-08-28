import React from "react"
import Application from "../layout/Application";
class Index extends React.Component {
  render () {
    return (
      <Application>
        home/index - {this.props.bookText}
      </Application>
    );
  }
}

export default Index
