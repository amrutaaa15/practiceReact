import React, { Component } from 'react'

export class Aside extends Component {
    render() {
        return (
            <div>
                    <aside className={this.props.class}>
                        <img src={this.props.img}></img>
                        <div className ="text1">
                        <span>{this.props.date}</span>
                        <span>{this.props.content}</span>
                        </div>
                    </aside>
            </div>
        )
    }
}

export default Aside
