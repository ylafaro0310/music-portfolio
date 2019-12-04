import React from 'react'
import Img from 'gatsby-image'
import Layout from '../../components/Layout'
import Cover from '../../components/Cover'

const Profile = ({data}) => (
    <Layout>
        <Cover>
        <div>
            <h2>Profile</h2>
            <Img fixed={data.file.childImageSharp.fixed} />
            <p>
            ウォーキングベースを好む1995年製ベーシスト。
            <br/>
            ライブ活動や作曲、カバーをしています。
            <br/>
            どこかでお会いした際はどうぞよしなに。
            <br/>
            <br/>
            所属バンド
            <br/>
            JANOMETONES
            <br/>
            four idea
            </p>
        </div>
        </Cover>
    </Layout>
)

export default Profile

export const query = graphql`
  query {
    file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`