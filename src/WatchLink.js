import React, { Component } from "react";

class WatchLink extends Component {
    state = {
        link: this.props.link,
    };

    render() {
        return (
            <div className="watch_link">
                <button onClick={this.props.deleteLink.bind(this, this.props.link.id)}>Delete</button>
                <a href={this.state.link.link} target="_blank" rel="noopener noreferrer" className="main_link">
                    <img src={this.state.link.thumb} alt={this.state.link.title} width="150px" />
                    <div>
                        <h4>{this.state.link.title}</h4>
                        <span>{this.state.link.length}</span>
                    </div>
                </a>
                <a href={this.state.link.creator_link} rel="noopener noreferrer" target="_blank"> {this.state.link.creator}</a>
            </div>
        );
    }
}

export default WatchLink;
