import React, { Component } from 'react'
// import imgs from '../IMGS/img5.jpg'

export class Cards extends Component {
    render() {
        return (
            <div>
                    <article className="article1">
                        <section className={this.props.class}>
                            <aside className={this.props.cardName}></aside>
                            <img src={this.props.img}></img>
                            <div className ="text">
                            <span>  <strong>{this.props.title}</strong></span>
                            <span>{this.props.name}</span>
                            </div>
                        </section>
                    </article>
            </div>
        )
    }
}

export default Cards
