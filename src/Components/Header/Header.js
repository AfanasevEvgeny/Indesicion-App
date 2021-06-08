import React from 'react'

const Header = (props) => {
    let title = props.title
    let subtitle = props.subtitle
    return (
        <div className='header'>
            <div className='container'>
                <h1 className='header__title'>{title}</h1>
                {subtitle && <h2 className='header__subtitle'>{subtitle}</h2>}
            </div>
        </div>
    )
}

Header.defaultProps = { //if props was not passed to comp onent
    title: 'Indecision'
}

export default Header