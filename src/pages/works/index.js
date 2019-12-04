import React from 'react'

import Layout from '../../components/Layout'

const Works = () => (
    <Layout>
        <div className="card">
        <div className="card-content">

        <h2>Works</h2>
        <div>
            <h3>Band</h3>

            <h4>JANOMETONES</h4>
            <div className="frame-wrapper__video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/3ZmK5Oxdx2s" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>

            <h4>four idea</h4>
        </div>
        
        <div>
            <h3>Compose and produce</h3>
            <h4>demo</h4>
            <iframe width="100%" height="450" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/510567141&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>      
        </div>

        </div>
        </div>
    </Layout>
)

export default Works