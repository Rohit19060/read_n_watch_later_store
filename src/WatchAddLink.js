import axios from "axios";
import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";

class WatchAddLink extends Component {
    state = {
        link: "",
        thumb: "",
        length: "",
        title: "",
        creator: "",
        creator_link: "",
        redirect: false,
    };
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    formHandler = (e) => {
        e.preventDefault();
        const { link,
            thumb,
            length,
            title,
            creator,
            creator_link } = this.state;
        const postContent = {
            id: "",
            link,
            thumb,
            length,
            title,
            creator,
            creator_link
        };
        console.log(postContent);
        axios
            .post("http://localhost:5000/api/watch", postContent)
            .then(() => this.setState({ redirect: true }))
            .catch((err) => console.error(err));
    };
    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to='/watch' />;
        } else {
            return (
                <div>
                    <form onSubmit={this.formHandler}>
                        <h2>Add Link</h2>
                        <div className="inputDiv">
                            <label htmlFor="link">Video Link: </label>
                            <input type="text" name="link" id="link" required onChange={this.onChange} />
                        </div>
                        <div className="inputDiv">
                            <label htmlFor="thumb">Thumbnail Link: </label>
                            <input type="url" name="thumb" id="thumb" required onChange={this.onChange} />
                        </div>
                        <div className="inputDiv">
                            <label htmlFor="length">Length: </label>
                            <input type="time" name="length" id="length" required step="1" onChange={this.onChange} />
                        </div>
                        <div className="inputDiv">
                            <label htmlFor="title">Title: </label>
                            <input type="text" name="title" id="title" required onChange={this.onChange} />
                        </div>
                        <div className="inputDiv">
                            <label htmlFor="creator">Creator: </label>
                            <input type="text" name="creator" id="creator" required onChange={this.onChange} />
                        </div>
                        <div className="inputDiv">
                            <label htmlFor="creator_link">Creator Link: </label>
                            <input type="url" name="creator_link" id="creator_link" required onChange={this.onChange} />
                        </div>
                        <div className="formButtons">
                            <button type="submit" value="Submit">Submit</button>
                            <button id="cancel" onClick={this.props.history.goBack}>Cancel</button>
                        </div>
                    </form>
                </div>
            );
        }
    }
}

export default withRouter(WatchAddLink);
