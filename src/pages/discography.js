import React from 'react'

import Layout from '../components/Layout'

const Discography = () => (
    <Layout>
        <h2>discography</h2>
        <div>
            <h3>band</h3>
            <h4>JANOMETONES</h4>
            <div class="frame-wrapper__video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/3ZmK5Oxdx2s" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>
        <div>
        <h3>compose and produce</h3>
            <h4>demo</h4>
            <iframe width="100%" height="450" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/510567141&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
        </div>
    </Layout>
)

export default Discography