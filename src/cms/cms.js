import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import WorksPostPreview from './preview-templates/WorksPostPreview'
import InfoPagePreview from './preview-templates/InfoPagePreview'
import ProfilePagePreview from './preview-templates/ProfilePagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('works', WorksPostPreview)
CMS.registerPreviewTemplate('info', InfoPagePreview)
CMS.registerPreviewTemplate('profile', ProfilePagePreview)
