import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import "../styles/index.css"
import { ContactContent } from "./contact/index"

const IndexPage = () => (
  <Layout isTopPage>
    <SEO title="Home" />
    <div className="card">
      <div className="card-content">
      <h2>Works</h2>        
      <div>
        <p>2018.08.07 JANOMETONES「通り雨」のベースを弾かせていただきました。</p>
          <div className="frame-wrapper__video">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/3ZmK5Oxdx2s" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
      </div>
      <Link to="/works">View all→</Link>
      </div>
    </div>
    <div className="card">
    <div className="card-content">
      <h2>Live</h2>        
      <div>
          <p>
            2019.01.27 Various Colors vol.9
            <br/>
            @Ai music Studio
            <br/>
            OP/ 15:30 ST/1600
            <br/>
            door￥ 1000+1drink
            <br/>
            【CAST】
            <br/>
            復活のF、フラポ、WHITE NOIZ、ちズにし  
          </p>
      </div>
      <Link to="/live">View all→</Link>
      </div>
    </div>
    <div className="card">
    <div className="card-content">
      <ContactContent/>
    </div>
    </div>
  </Layout>
)

export default IndexPage
