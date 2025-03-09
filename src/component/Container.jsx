import React from 'react'
import Header from './Header'
import Menu from './Menu'
import Content from './Content'

import Footer from './Footer'

import '../App.css'


export default function Container() {

    return (
        <>
            <div class="container">
                <div class="header">
                    <Header />
                </div>
                <div class="menu">
                    <Menu />
                </div>
                <div class="content">
                    {/* <Content /> */}
                </div>
                <div class="footer">
                    <Footer />
                </div>
            </div>
        </>
    )
}