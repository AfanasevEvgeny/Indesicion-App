import React from 'react'
import Header from "../Header/Header";

const Layout = (props) => {
    const title = 'Indecision'
    const subtitle = 'Put your life in hands of a computer'
    return (
        <div>
            <Header title={title} subtitle={subtitle}/>
            <div className='container'>
            {props.children}
            </div>
        </div>
    )
}

export default Layout