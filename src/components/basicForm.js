import React from "react"
const axios = require('axios');
class BasicForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: '', email: '', isOptedIn: true};
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      buttonStyle = {
        width: '30%',
        height: '47', 
        fontStyle: 'normal', 
        fontWeight: 'bold', 
        lineHeight: '47px',
        fontSize: '16px', 
        display: 'block', 
        background: '#8953B7',
        textAlign: 'center',
        color: '#ffffff',
        borderRadius: '4px',
        margin:'auto'
    }
    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({[name]: value});
    }
    handleSubmit(event) {
        axios({
            method: 'post',
            url: 'http://127.0.0.1:5000/read_leo_add_subscriber',
            data: {
                name: this.state.name,
                email: this.state.email
            }
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' name='name' placeholder='name' value={this.state.name} onChange={this.handleInputChange} />
                <input type='email' name='email' placeholder='email' value={this.state.email} onChange={this.handleInputChange} />
                <input style={this.buttonStyle} type="submit" value="Submit" />
            </form>
        )}
    }
export default BasicForm