import React, { Component } from "react";

class PostNew extends Component {
  render() {
    return (
      <input
        onChange={e => this.props.handleFieldChange(e)}
        required
        type="text"
        id={`${this.props.fieldName}`}
        placeholder={this.props.fieldName}
      />
    );
  }
}

export default PostNew;
