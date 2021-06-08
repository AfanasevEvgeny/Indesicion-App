import React from 'react'

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            error: undefined
        }
    }

    handleClick(event) {
        event.preventDefault()
        let text = event.target.option.value
        let error = this.props.handleAddOption(text)
        console.log(error)
        this.setState(() => ({
            error
        }))
        //this.props.handleAddOption(text)
        event.target.option.value = ''
    }

    render() {
        return (
            <div>
                {!!this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleClick} className='add-option'>
                    <input type='text' name='option' className='add-option__input'/>
                    <button className='button'>add option!</button>
                </form>
            </div>
        )
    }
}

export default AddOption