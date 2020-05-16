import React from 'react'

import Layout from '../../components/Layout'
import Cover from '../../components/Cover'
import { Link } from 'gatsby'

const Works = () => (
    <Layout>
        <Cover>
        <h2>Works</h2>
        <div>
            <h3>Band</h3>

            <Link to='/works/JANOMETONES'>JANOMETONES</Link>
            <br/>
            <Link to='/works/fouridea'>four idea</Link>
        
            <h3>Compose and cover</h3>
            <Link to='/works/demo'>Demo</Link>
            
        </div>
        </Cover>
    </Layout>
)

export default Works