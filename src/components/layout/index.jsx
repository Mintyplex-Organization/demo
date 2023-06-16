import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../navbar'
import Footer from '../footer'

function PageLayout(props) {

    const children = props.children

    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}


export default PageLayout
