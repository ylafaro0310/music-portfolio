import React from 'react'
import PropTypes from 'prop-types'
import { InfoPageTemplate } from '../templates/info-page'

const InfoPagePreview = ({ entry, widgetFor}) => {
  return (
    <InfoPageTemplate
      content={widgetFor('body')}
      title={entry.getIn(['data', 'title'])}
    />
  )
}

InfoPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default InfoPagePreview