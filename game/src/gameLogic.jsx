import React from 'react';
import rnl2b from 'react-newline-to-break';

export class GameText extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currNode : props.wholeData,
            input : ''
        };
    }

    handleChange = (event) => {
        this.setState({input: event.target.value});
    };

    handleKeyPress = (event) => {       // stop getting user input on enter
        if(event.key === 'Enter'){
            this.checkInput();
        }
    };

    checkInput = () => {
        /*
        Compare input (after pressing enter) to both child’s keywords
        If the input matches one of the child node’s, set Node equal to the right child node
        Call nextPart(Node)
        Else if >50% close to one word say “Did you mean to type (child keyword)? (Keyword) is spelled (). Please retype.”
        Add incorrect Node’s data to an array
        Else say “Input not recognized. Please enter either (list child keywords).”
         */
        if(this.state.input == this.state.currNode.right.data.name) {
            this.setState({currNode: this.state.currNode.right});
            alert(this.state.currNode.data.name);
        } else alert("not whoa");
    };

    nextPart(Node) {
        this.setState({storyText: Node.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
    };


    render() {
        let text = this.state.currNode.data.story;
        text = rnl2b(text);

        return (
            <div className="message-box">
                <div className="message-text">
                    <p>
                        { text }
                    </p>
                </div>
                <form className="form" onSubmit={ this.handleSubmit }>
                    <input type="text" className="input" id="choice" onChange={this.handleChange.bind(this)} onKeyPress={this.handleKeyPress.bind(this)}/>
                    <input type="submit" className="submit" value="Enter" />
                </form>
            </div>
        );
    }
}