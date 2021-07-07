import React from 'react'
import { ButtonClick } from './Button.styled'
import PropTypes from 'prop-types'
const Button = ({ nameBtn, handelCangeStatistics }) => {
  return (
    <ButtonClick onClick={() => handelCangeStatistics(nameBtn)} type="button">
      {nameBtn}
    </ButtonClick>
  )
}
Button.propTypes = {
  nameBtn: PropTypes.string.isRequired,
  handelCangeStatistics: PropTypes.func.isRequired,
}
export default Button
