import React from 'react'
import Header from './Header'
import Helmet from 'react-helmet'

const Layout = ({isTopPage=false,children}) => (
    <div className="container">
        <Helmet  
            title="Yukigumo"
            meta={[
                { name: "Yukigumo", content: "Yukigumo" }
            ]}
        />
        <Header isTopPage={isTopPage}/>
        {children}
        <div style={{margin: "50px 0 20px 0",color: "antiquewhite",textAlign: "center"}}>
            ©2019　Yukigumo
        </div>
    </div>
)

export default Layout