import React from "react"

const Item = ({children}) => (
    <div className="item">
    <div className="item-content">
    {children}
    </div>
    </div>
)

export default Item