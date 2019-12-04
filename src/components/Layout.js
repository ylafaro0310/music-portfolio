import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({isTopPage=false,children}) => (
    <div>
        <Header isTopPage={isTopPage}/>
        {children}
        <div style={{margin: "50px 0 20px 0",color: "antiquewhite",textAlign: "center"}}>
            ©2019　Yukigumo
        </div>
    </div>
)

export default Layout