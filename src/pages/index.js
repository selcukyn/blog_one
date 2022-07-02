import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import './index.css'




const IndexPage = ({data}) => (

  <div>
   <h1>HOP</h1>

      <div className={"photos"}>
          {data.allFile.edges.map(({ node }) => {
              return <Img key={node.id} fluid={node.childImageSharp.fluid}/>
          })}
      </div>


  </div>
)
export const pageQuery = graphql`
  {
  allFile (filter:{absolutePath: {regex:"//photos//"}}) {
    edges {
      node {
        id
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`
export default IndexPage
