import React from 'react'
import {Options} from "../Options/Options";
import AddOption from "../Options/AddOption";
import Action from "../Action/Action";
import Layout from "../Layout/Layout";
import OptionModal from "../OptionModal/OptionModal";

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: props.options,
            selectedOption: undefined
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.clearOption = this.clearOption.bind(this)
        console.log('constructor is done')
    }

    componentDidMount() {
        console.log('mounted, fetching data...')
        const json = localStorage.getItem('options')
        const options = JSON.parse(json)
        if (options) {
            this.setState(() => ({options}))
        }
        console.log('state: ', this.state)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
        console.log('updated')
    }

    componentWillUnmount() {
        console.log('unmount')
    }

    handleDeleteOption(element) {
        console.log(element)
        this.setState(
            (prevState) => ({
                    options: prevState.options.filter(option => option !== element)
            })
        )
        console.log(this.state)
    }

    handleDeleteOptions() {
        this.setState(() => ({
            options: []   // в круглых скобках возвращает объект
        }))
    }

    handlePick = () => {
        let action = Math.floor(Math.random() * this.state.options.length)
        let option = this.state.options[action]
        // alert(this.state.options[action])
        this.setState(() => ({
            selectedOption: option
        }))
    }

    handleAddOption(option) {
        if (!option) {
            return 'Empty!'
        } else {
            this.setState((prevState) => ({
                options: prevState.options.concat([option])
            }))
        }

    }

    clearOption() {
        this.setState(() => ({
            selectedOption: undefined
        }))
    }


    render() {
        console.log(this.state)
        return (
            <Layout>
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
                <div className='widget'>
                    <Options options={this.state.options} handleDeleteOption={this.handleDeleteOption}
                             handleDeleteOptions={this.handleDeleteOptions}/>
                    <AddOption handleAddOption={this.handleAddOption}/>
                </div>
                <OptionModal selectedOption={this.state.selectedOption} clearOption={this.clearOption}/>
            </Layout>
        )
    }
}

console.log(localStorage)
IndecisionApp.defaultProps = {
    options: []
}

export default IndecisionApp