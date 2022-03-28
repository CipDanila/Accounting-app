import React from "react";
import Footer from '../components/Footer';
import Header from '../components/Header';
//import Table from '../components/Table';

class ViewConsultation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            response_data: ""
        }
    }
    componentDidMount() {
        fetch("http://localhost:5000/consultation")
            .then(response => response.json())
            .then(data => this.setState({ response_data: data }));
    }
    render() {
        return (
            <div>
                <Header />
                <label>{this.state.response_data}</label>
                <Footer />
            </div>
        )
    };
}

export default ViewConsultation;
