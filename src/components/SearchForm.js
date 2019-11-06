import React from "react";

export class SearchForm extends React.Component {
  state = {
    inputValue: ""
  };
  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.props.onFormSubmit(this.state.inputValue);
        }}
      >
        <input
          onChange={e => {
            this.setState({ inputValue: e.target.value });
          }}
          value={this.state.inputValue}
        />
        <button>Search</button>
      </form>
    );
  }
}
