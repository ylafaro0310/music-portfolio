import React from 'react'

export const HTMLContent = ({className,content}) => (
    <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

const Content = ({className,content}) => (
    <div className={className}>{content}</div>
)

export default Content