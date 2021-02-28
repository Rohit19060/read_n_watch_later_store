import axios from "axios";
import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";

class ReadAddLink extends Component {
    state = {
        link: "",
        redirect: false,
    };
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    formHandler = (e) => {
        e.preventDefault();
        const link = {
            id: "",
            link: this.state.link,
        };
        axios
            .post("http://localhost:5000/api/read", link)
            .then(() => this.setState({ redirect: true }))
            .catch((err) => console.error(err));
    };
    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to='/read' />;
        } else {
            return (
                <div>
                    <form onSubmit={this.formHandler}>
                        <h2>Add Link</h2>
                        <div className="inputDiv">
                            <label htmlFor="link">Link: </label>
                            <input
                                type="url"
                                name="link"
                                id="link"
                                required
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="formButtons">
                            <button type="submit" value="Submit">
                                Submit
                </button>
                            <button id="cancel" onClick={this.props.history.goBack}>
                                Cancel
                </button>
                        </div>
                    </form>
                </div>
            );
        }

    }
}

export default withRouter(ReadAddLink);
