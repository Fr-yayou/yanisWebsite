import React, { Component } from 'react'

export class From extends Component {
    render() {
        return (
            <div className='form-container'>
                <div className='text-container'>
                    <h1>Contact Me</h1>
                    <p>uhgfuirehgrthughtruhutrih</p>
                </div>
                <form className='form'>
                    <div className="form__name">
                        <label>Name</label>
                        <input type='text' name='name'></input>
                    </div>
                    <div className="form__name__email">
                        <label>Email</label>
                        <input type='text' name="name"></input>
                    </div>
                    <div className="form__name__email__message">
                        <label>How cam I help you</label>
                        <textarea name='message'></textarea>
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
