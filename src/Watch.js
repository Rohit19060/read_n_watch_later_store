import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import WatchLink from "./WatchLink";
import axios from "axios";

class Watch extends Component {
    state = {
        link: [],
    };

    componentDidMount() {
        axios.get("http://localhost:8000/api/watch", {
            params: {
                id: 0
            }
        }).then((res) => {
            this.setState({ link: res.data });
        });
    }
    deleteLink = (id) => {
        let x = document.getElementById("sort").value;
        console.log(x)
        axios
            .delete("http://localhost:8000/api/watch?id=" + id + "&SORTid=" + x)
            .then((res) => {
                this.setState({ link: res.data });
            })
            .catch((err) => console.error(err));
    };

    handleClick = (id) => {
        axios.get("http://localhost:8000/api/watch", {
            params: {
                id: id
            }
        }).then((res) => {
            this.setState({ link: res.data });
        });
    }
    render() {
        return (
            <div>
                <h1 className="sub_heading">Watch Later</h1>
                <div style={{ padding: "45px" }}></div>
                <div className="functions">
                    <div>Sort: <select name="sort" id="sort" onChange={(e) => { this.handleClick(e.target.value) }}>
                        <option hidden>Choose</option>
                        <option value="1">Title</option>
                        <option value="2">Length ASC</option>
                        <option value="3">Length DESC</option>
                        <option value="4">Creator</option>
                    </select>
                    </div>
                    <Link to="/addWatchLink"><button>Add Link</button></Link>
                </div>
                <div className="main">
                    {this.state.link.map((link) => (
                        <WatchLink link={link} key={link.id} deleteLink={this.deleteLink} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Watch;
