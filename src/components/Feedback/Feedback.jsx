
import { Component } from 'react';
import { Aside, Title, FeedbackBtn, Statistics } from './Feedback.styles'
import NotificationMessage from '../Notification/Notification'
import FeedbackClick from './FeedbackBtn'
console.log(FeedbackBtn)
// function Feedback() {
//   const click = () => {
//     console.log('click')
//   }
//   return (
//       <Aside>
//           <Title>Please leave feedback</Title>
//       <FeedbackBtn onClick={click} text='Good'>Good</FeedbackBtn>
          // <FeedbackBtn >Neutral</FeedbackBtn>
          // <FeedbackBtn >Bad</FeedbackBtn>
//           <Statistics>Statistics</Statistics>
//     </Aside>
    
//   )
// }
// export default Feedback;
export default class Feedback extends Component{
  state = {
    isShow: false,
    good: 0,
    neutral: 0,
    bad: 0
  };

  click1 = () => {
    this.setState(() => ({
      isShow: true,
      good: this.state.good + 1,
      //  neutral: this.state.neutral +1,
      //  bad: this.state.bad +1,
    }));
  }
  click2 = () => {
    this.setState(() => ({
      isShow: true,
      //  good: this.state.good +1,
      neutral: this.state.neutral + 1,
      //  bad: this.state.bad +1,
    }));
  }
  click3 = () => {
    this.setState(() => ({
      isShow: true,
      //  good: this.state.good +1,
      //  neutral: this.state.neutral +1,
      bad: this.state.bad + 1,
    }));
  }
  countTotalFeedback() {
    return(this.state.bad+this.state.neutral+this.state.good)
  }
  countPositiveFeedbackPercentage() {
    return(Math.round((this.state.good*100)/this.countTotalFeedback()))
  }
      render() {
        return (
          <Aside>
            <Title>Please leave feedback</Title>
            <FeedbackBtn onClick={this.click1} >Good</FeedbackBtn>
        
            <FeedbackBtn onClick={this.click2}>Neutral</FeedbackBtn>
            <FeedbackBtn onClick={this.click3} >Bad</FeedbackBtn>
            <Statistics>Statistics {this.state.isShow ? (<ul><FeedbackClick text={`good: ${this.state.good}`} ></FeedbackClick>
              <FeedbackClick text={` neutral: ${this.state.neutral} `} ></FeedbackClick>
              <FeedbackClick text={` bad: ${this.state.bad}`} ></FeedbackClick>
              <FeedbackClick text={`total: ${this.countTotalFeedback()}`}></FeedbackClick>
              <FeedbackClick text={`Positive feedback: ${this.countPositiveFeedbackPercentage()}%`}></FeedbackClick></ul>) 
            : <NotificationMessage message={'No feedback given'}></NotificationMessage >}
              </Statistics>
        
            {/* <FeedbackClick></FeedbackClick> */}
          </Aside>
    
        )
      }
    }
  