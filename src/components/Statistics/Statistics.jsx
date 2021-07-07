import React from 'react'
import PropTypes from 'prop-types'
import { Aside } from '../Section/Section.styled'
import { StatisticsTitle, Item } from './Statistics.styled'

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <Aside>
      <StatisticsTitle>Statistics</StatisticsTitle>

      <ul>
        <Item>Good: {good}</Item>
        <Item>Neutral: {neutral}</Item>
        <Item>Bad: {bad}</Item>
        <Item>Total: {total}</Item>
        <Item>Positive feedbaks: {positivePercentage}%</Item>
      </ul>
    </Aside>
  )
}
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}
export default Statistics
