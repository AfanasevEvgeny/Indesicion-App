import React from 'react'

const Option = (props) => {
    let text = props.text

    return (
        <div className='option'>
            <p className='option__text'>{props.index+1+'. '+text + ' '}</p>
            {/*<button onClick={props.handleDeleteOption}> remove</button>*/}
            <button  className='button--link' onClick={() => {
                props.handleDeleteOption(text)
            }}>
                delete
            </button>
        </div>
    )
}
export default Option