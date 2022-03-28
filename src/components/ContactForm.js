import React from 'react';
import './ContactForm.css';


class ContactForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            message: '',
            serverMessage: ''
        };
    }

    handleButtonClick(event) {
        event.preventDefault();     //nu lasa pagina sa faca ce avea default
        
        const data = new URLSearchParams();
        data.append("email", this.state.email);
        data.append("message", this.state.message);
        let that = this;

        fetch('http://localhost:5000/save-contact-message', {
            method: "POST",
            body: data
        })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            if (data.success) {
                that.setState({
                    serverMessage: data.confirmation
                });
            }
        });
    }

    handleChange(e) {
        let name = e.target.name;
        let value = e.target.value;

        if(name === "name") {
            this.setState({
                email: value
            })
        } else if (name === "message") {
            this.setState({
                message: value
            })
        }
    }

    render() {
        return (
          <div className="contact-form">
              <h2>{this.state.serverMessage}</h2>
              <form action="/">
                  <div className="form-row">
                      <label className="form-label">Email</label>
                      <input onChange={this.handleChange.bind(this)} className="form-element" type="text" name="email"/>
                  </div>
                  <div className="form-row">
                      <label className="form-label">Message</label>
                      <textarea onChange={this.handleChange.bind(this)} className="form-element" name="message" rows="10"></textarea>
                  </div>
                  <div className="form-row">
                      <button onClick={this.handleButtonClick.bind(this)} className="form-button">Send</button>
                  </div>
              </form>
          </div>
        );
    }
}

export default ContactForm;