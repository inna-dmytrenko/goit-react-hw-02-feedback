import React from 'react'
import { Title, Aside } from './Section.styled'
import PropTypes from 'prop-types'

const Section = ({ title, children }) => {
  return (
    <Aside>
      <Title>{title}</Title>
      {children}
    </Aside>
  )
}
Section.defaultPros = {
  title: 'Title',
}
Section.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Section
