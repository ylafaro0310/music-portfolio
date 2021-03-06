import React from 'react'
import PropTypes from 'prop-types'
import { ProfilePageTemplate } from '../../templates/profile-page'

const ProfilePagePreview = ({ entry, widgetFor, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  if(data){
    return (
      <ProfilePageTemplate
        content={widgetFor('body')}
        title={entry.getIn(['data', 'title'])}
        image={getAsset(data.image)}
      />
    )
  }else{
    return (
      <div>Loading...</div>
    )
  }
}

ProfilePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func,
}

export default ProfilePagePreview