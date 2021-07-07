import React, { Component } from 'react'
import Section from './components/Section/Section.jsx'
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions'
import Statistics from 'components/Statistics/Statistics'
import Notification from 'components/Notification/Notification.jsx'

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, stat) => {
      acc += stat
      return acc
    }, 0)
  }
  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100)
  }
  handelCangeStatistics = (nameBtn) => {
    this.setState({ [nameBtn]: this.state[nameBtn] + 1 })
  }
  render() {
    const { good, neutral, bad } = this.state

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handelCangeStatistics}
        />
        {this.countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message={'No feedback given'} />
        )}
      </Section>
    )
  }
}
