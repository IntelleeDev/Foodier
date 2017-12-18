import React from 'react'
import PropTypes from 'proptypes'

import Header from './Header'
import { Section } from '../../utils'

import '../../../../../../../public/css/form.css'

const FormCard = ({ title, children, closeForm }) => (
  <Section className='form-card'>
    <Header {...{ title }} closeForm={closeForm} />
    { children }
  </Section>
)

FormCard.propTypes = {
  title: PropTypes.any.isRequired,
  closeForm: PropTypes.func.isRequired
}

export default FormCard
