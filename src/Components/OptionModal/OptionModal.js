import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel='Selected Option'
        onRequestClose={props.clearOption}
        closeTimeoutMS={200}
        className = 'modal'
    >
        <h2>Selected Option:</h2>
        <h3>{props.selectedOption}</h3>
        <button className='button' onClick={props.clearOption}>OK!</button>
    </Modal>
)


export default OptionModal