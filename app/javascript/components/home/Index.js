import React from "react"
import Dashboard from "../layout/Dashboard";
class Index extends React.Component {
  render () {
    return (
      <Dashboard>
        home/index - {this.props.bookText}
      </Dashboard>
    );
  }
}

export default Index
