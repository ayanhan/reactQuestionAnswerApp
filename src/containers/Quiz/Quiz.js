import React, {Component} from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {
  state = {
    quiz: [
      {
        question: 'What is sky color?',
        rightAnswerId: 3,
        answers: [
          {text: 'Red', id: 1},
          {text: 'Black', id: 2},
          {text: 'Blue', id: 3},
          {text: 'Green', id: 4}
        ]
      }
    ]
  }

  onAnswerClickHandler = (answerId) => {
    console.log(answerId)
  }

  render() {
    return (
        <div className={classes.Quiz}>
          <div className={classes.QuizWrapper}>
            <h1>Answer to Questions</h1>
            <ActiveQuiz
              answers={this.state.quiz[0].answers}
              question={this.state.quiz[0].question}
              onAnswerClick={this.onAnswerClickHandler}
            />
          </div>
        </div>
    );
  }

}

export default Quiz