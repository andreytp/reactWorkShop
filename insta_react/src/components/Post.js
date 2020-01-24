import React, {Component} from 'react';

export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className="post__name">
                    some name
                </div>
                <div className="post__descr">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
            </div>
        )
    }
}