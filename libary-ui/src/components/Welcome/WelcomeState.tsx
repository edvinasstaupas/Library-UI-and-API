import React from "react";
import {User, WelcomeProps} from "./types";

class WelcomeState extends React.Component<WelcomeProps, User> {
    constructor(props: WelcomeProps) {
        super(props);
        this.state = {...props.user}
    }

    private onChange = (e: any) => {
        this.setState({
            ...this.state,
            name: e.target.value
        })
    }

    render() {
        return (
            <>
                <div>
                    Hello,
                    <strong>{this.state.name}</strong>!
                </div>
                <div>
                    Your surname is <i>{this.state.surname}</i>
                </div>
                <div>
                    Your salary is <strong>{this.props.salary}</strong>
                </div>
                <input onChange={this.onChange} value={this.state.name}/>
            </>
        );
    }
}

export default WelcomeState;
