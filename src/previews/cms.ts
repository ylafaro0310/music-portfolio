import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import WorksPostPreview from './WorksPostPreview'
import InfoPagePreview from './InfoPagePreview'
import ProfilePagePreview from './ProfilePagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('works', WorksPostPreview)
CMS.registerPreviewTemplate('info', InfoPagePreview)
CMS.registerPreviewTemplate('profile', ProfilePagePreview)
