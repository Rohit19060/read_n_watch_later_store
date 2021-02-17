import React, { Component } from "react";
import WatchLink from "./WatchLink";
import axios from "axios";

class Watch extends Component {
    state = {
        link: [],
    };

    componentDidMount() {
        axios.get("http://localhost:5000/api/watch", {
            params: {
                id: 0
            }
        }).then((res) => {
            this.setState({ link: res.data });
        });
    }
    deleteLink = (id) => {
        axios
            .delete("http://localhost:5000/api/watch?id=" + id)
            .then((res) => {
                this.setState({ link: res.data });
            })
            .catch((err) => console.error(err));
    };

    handleClick = (id) => {
        axios.get("http://localhost:5000/api/watch", {
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
                <div style={{ padding: "35px" }}></div>
                <div>
                    <div className="sort">
                        Sort:  <select name="sort" id="sort" onChange={(e) => { this.handleClick(e.target.value) }}>
                            <option hidden>Choose</option>
                            <option value="1">Title</option>
                            <option value="2">Length</option>
                            <option value="3">Creater</option>
                        </select>
                    </div>
                    <div className="main">
                        {this.state.link.map((link) => (
                            <WatchLink link={link} key={link.id} deleteLink={this.deleteLink} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Watch;
