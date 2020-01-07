import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/banner'
import One from '../components/one'
import Two from '../components/two'
import Three from '../components/three'
import Four from '../components/four'
import Five from '../components/five'

class Home extends React.Component {
  render() {
    return (
      <Layout location="/">
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          title="Gatsby Starter - Landed"
          meta={[
            { name: 'description', content: 'Landed Gatsby Starter' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        ></Helmet>
        <Banner />
        <One />
        <Two />
        <Three />
        <Four />
        <Five />
      </Layout>
    )
  }
}

export default Home
