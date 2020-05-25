import React from 'react'
import PropTypes from 'prop-types'
import { WorksPostTemplate } from '../../templates/works-post'
import { CategoryTemplate } from '../../templates/category'

const WorksPostPreview = ({ entry, widgetFor, getAsset }) => {
    const data = entry.getIn(['data']).toJS()
    return (
    data ?
    <div>
        <CategoryTemplate 
            key='1'
            slug='#'
            title={entry.getIn(['data', 'title'])}
            description={entry.getIn(['data', 'description'])}
            imageUrl={getAsset(data.imageUrl)}
        />
        <hr/>
        <WorksPostTemplate
            content={widgetFor('body')}
            title={entry.getIn(['data', 'title'])}
        />
    </div>
    : <div>Loading...</div>
  )
}

WorksPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func,
}

export default WorksPostPreview