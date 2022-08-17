import * as React from "react"
import Layout from "../components/Layout"
const IndexPage = () => {
  return (
   <Layout>

    <main>
      <h1 className="text-3xl font-bold underline">
        Index page
      </h1>

    </main>
   </Layout> 
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
