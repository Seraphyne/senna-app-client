import Button from "./../../components/Button/Button";
import { Input, Label } from "../Form/Form";

import React, { Component } from "react";

class LearningPage extends Component {
  state = {
    error: null,
  };

  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  render() {
    const { nextWord, incorrect, correct } = this.props;
    const { error } = this.state;
    return (
      <section className="nextWord">
        <div role="alert">{error && <p>{error}</p>}</div>
        <h3>Translate the word:</h3>
        <span><b>{nextWord}</b></span>
        <div>
          <p className='right-wrong'>You have answered this word correctly {correct} times.</p>
          <p className='right-wrong'>You have answered this word incorrectly {incorrect} times.</p>
        </div>
        <form onSubmit={this.props.handleGuess} className="answer-form">
          <Label htmlFor="learn-guess-input">
            Translate 
          </Label>
          <Input
            type="text"
            name="learn-guess-input"
            id="learn-guess-input"
            required
          ></Input>
          <Button type="submit">Submit</Button>
        </form>
      </section>
    );
  }
}

export default LearningPage;
