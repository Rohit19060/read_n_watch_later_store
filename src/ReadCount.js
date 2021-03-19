import React, { Component } from "react";
import axios from "axios";
class ReadCount extends Component {
    state = {
        count: 0
    }
    componentDidMount() {
        axios.get("http://localhost:5000/api/RCount", {
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

export default ReadCount;
