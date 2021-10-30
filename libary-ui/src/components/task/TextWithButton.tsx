import {Text} from "./types"
import React from "react";

export default class TextWithButton extends React.Component<Text, Text> {
    constructor(props: Text) {
        super(props);
        this.state = {...props};
    }

    private onButtonClick = () => {
        let count: number;
        if (this.state.value === this.props.value) {
            count = 0;
        } else {
            count = parseInt(this.state.value);
        }
        const newState = count + 1;
        this.setState({value: newState.toString()});
    }

    render() {
        return (
            <>
                <p>
                    {this.state.value}
                    <button onClick={this.onButtonClick}>Click me</button>
                </p>
            </>
        )
    }
}