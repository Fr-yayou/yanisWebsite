import React, { Component } from 'react'
import axios from 'axios'

export class From extends Component {

    state = {
        name :'',
        email:'',
        message:'',

    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const{name,email,message} = this.state
        axios.post('http://localhost:5000/form', {
            name,
            email,
            message,
        })
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
                        <input type='text' name='name' onChange={this.onChange}></input>
                    </div>
                    <div className="form__name__email">
                        <label>Email</label>
                        <input type='text' name="email" onChange={this.onChange}></input>
                    </div>
                    <div className="form__name__email__message">
                        <label>How cam I help you</label>
                        <textarea name='message' onChange={this.onChange}></textarea>
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
