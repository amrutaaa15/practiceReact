import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar">
                    <section className="leftnav">
                        Insight <span> your nice slogan...</span>
                    </section>
                    <section className="rightnav">
                        <ul className="icons">
                            <i className="far fa-question-circle"></i> <li><a href="index.html">How It Works?</a></li>
                            <i className="fas fa-user-plus"></i> <li><a href="signup.html">Sign Up</a></li>
                            <i className="fas fa-lock"></i> <li><a href="login.html">Login</a></li>
                        </ul>
                    </section>
                </nav>
            </div>
        )
    }
}

export default Navbar
