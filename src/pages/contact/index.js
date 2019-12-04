import React from 'react'
import Layout from '../../components/Layout'
import Cover from '../../components/Cover'

export const ContactContent = () => (
    <div>
        <h2>Contact</h2>
        <p>
        一緒に音楽活動をしてくださる方、その他お問い合わせはこちらまでお願いいたします。
        <br/>
        <a href="mailto:yukigumo0310@gmail.com">yukigumo0310@gmail.com</a>
        </p>
    </div>
)
const Contact = () => (
    <Layout>
        <Cover>
            <ContactContent/>
        </Cover>
    </Layout>
)

export default Contact
