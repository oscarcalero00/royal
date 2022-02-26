import PropTypes from 'prop-types'
import React from 'react'
import {Container} from './Button.module.scss'
import {defaultValues} from './Constants'

const Button = ({  textButton  }) => {
  
  return (
    <input type={'button'} value={textButton} className={Container} />
  )
}

Button.propTypes = {
  // activeClassName: PropTypes.string.isRequired,
  textButton : PropTypes.string,
}

Button.defaultProps = {
  textButton: 'SEARCH CRUISE',
};

export default Button