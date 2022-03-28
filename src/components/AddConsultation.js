import React from 'react';
import './AddConsultation.css';


class AddConsultation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            date: '',
            time: '',
            phone: '',
            serverMessage: ''
        };
    }

	handleButtonClick(event) {
		event.preventDefault();
		const data = {
			"fullName": this.state.fullName,
			"date": this.state.date,
			"time": this.state.time,
            "phone": this.state.phone
		}
		console.log(data);
		console.log(JSON.stringify(data));
		fetch("http://localhost:5000/save-consultation", {
			method: "POST",
			headers: { "Content-Type": 'application/json' },
			body: JSON.stringify(data)
		}).then(function () {
			alert("Thank you for your submission !");
		});
	}

    handleChange(e) {
        let name = e.target.name;
        let value = e.target.value;

        if(name === "fullName") {
            this.setState({
                fullName: value
            })
        } else if (name === "date") {
            this.setState({
                date: value
            })
        } else if (name === "time") {
            this.setState({
                time: value
            })
        } else if (name === "phone") {
            this.setState({
                phone: value
            })
        }
    }

    render() {
        return (
          <div className="consultation-form">
              <h2 className="consultation-form-title">Book Consultation Page</h2> 
              
              <form action="/">
                  <div className="form-row">
                      <label className="form-label">Full name:</label>
                      <input onChange={this.handleChange.bind(this)} className="form-element" type="text" name="fullName" />
                  </div>
                  <div className="form-row">
                      <label className="form-label">Date from:</label>
                      <input onChange={this.handleChange.bind(this)} className="form-element" type="date" name="date" />
                  </div>
                  <div className="form-row">
                      <label className="form-label">Time:</label>
                      <input onChange={this.handleChange.bind(this)} className="form-element" type="time" name="time" />
                  </div>
                  <div className="form-row">
                      <label className="form-label">Phone number:</label>
                      <input onChange={this.handleChange.bind(this)} className="form-element" type="text" name="phone" />
                  </div>
                  <div className="form-row">
                      <button onClick={this.handleButtonClick.bind(this)} className="form-button">Send booking</button>
                  </div>
              </form>
          </div>
        );
    }
}

export default AddConsultation;