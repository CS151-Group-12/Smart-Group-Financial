import React, { Component } from "react";

class CreateGroupPage extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onClick = e => {
    e.preventDefault();

    this.props.attemptRegister({
      email: this.state.email,
      password: this.state.password
    });
  };
}
