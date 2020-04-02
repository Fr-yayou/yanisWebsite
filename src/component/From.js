import React, { Component } from 'react'
import axios from 'axios'

export class From extends Component {

    state = {
        name :'',
        email:'',
        message: '',
        errors: '',


    }

    validate = () => {
        let errors =''
        let formIsValid = true

        if (!this.state.email) {
            formIsValid = false
            errors["email"]='Please enter your email'
        }
        if (typeof this.state.email !== 'undefined') {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(this.state.email)) {
                formIsValid = false
                errors["email"]='please enter valid email';
                
            }  
        }
        this.setState({ errors: errors })
        return formIsValid

        
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        if (this.validate()) {
            const { name, email, message } = this.state
            axios.post('http://localhost:8080/email', {
            name,
            email,
            message,
            })
            
            
        }
    }


    render() {
        return (
            <div className='form-container'>
                <div className='text-container'>
                    <h1>Contact Me</h1>
                    <p>uhgfuirehgrthughtruhutrih</p>
                </div>
                <form className='form' onSubmit={this.handleSubmit}>
                    <div className="form__name">
                        <label>Name</label>
                        <input class='input' type='text' name='name' onChange={this.onChange}></input>
                    </div>
                    <div>{this.state.errors.email}</div>
                    <div className="form__name__email">
                        <label>Email</label>
                        <input class='input' type='text' name="email" onChange={this.onChange}></input>
                    </div>
                    <div className="form__name__email__message">
                        <label>How cam I help you</label>
                        <textarea class='input' name='message' onChange={this.onChange}></textarea>
                    </div>
                    <div className="btn-container">
                        <button className="btnMessage" type="submit">Send Message</button>
                    </div>
                </form>
                
                
            </div>
        )
    }
}

export default From
