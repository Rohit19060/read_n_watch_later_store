import React, { Component } from "react";
import axios from "axios";
class WatchCount extends Component {
    state = {
        count: 0
    }
    componentDidMount() {
        axios.get("http://localhost:8000/api/WCount", {
        }).then((res) => {
            this.setState({ count: res.data });
        });
    }
    render() {
        return (
            <>
                ({this.state.count})
            </>
        );
    }
}

export default WatchCount;
