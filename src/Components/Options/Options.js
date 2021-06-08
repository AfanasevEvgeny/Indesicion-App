import React from 'react'
import Option from "./Option";

const Options = (props) => {
    let options = props.options
    let options_jsx = options.map((option, index) => <Option text={option} key={option} index ={index}
                                                      handleDeleteOption={props.handleDeleteOption}/>)
    return (
        <div>
            <div className="widget-header">
            <h3 className='widget-header__title'> Here is options:</h3>
            <button onClick={props.handleDeleteOptions} className='button--link'>Remove all!</button>
            </div>
            {options_jsx}
        </div>
    )
}

export {Options}