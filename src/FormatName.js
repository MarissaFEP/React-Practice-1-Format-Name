import React, {PropTypes, Component} from 'react';

export default class FormatName extends Component {
    static propTypes = {
        firstName: PropTypes.string,
        lastName: PropTypes.string
    };

    formatName() {
        return this.props.firstName + ' ' + this.props.lastName;
    }

    getGreeting() {
        if (this.props.firstName &&  this.props.lastName) {
            return `${this.formatName()}!`;
        }
        return 'Stranger.';
    }

    render() {
        return (
            <h1>Hello, {this.getGreeting()}</h1>
        );
    }     
}
