import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (

                <footer className="foo">
                <section className="flex">
                    <h1>MAIN</h1>
                    <ul>
                        <li>Start Here</li>
                        <li>Portfolio</li>
                        <li>Meet Us</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </section>
                <section className="flex">
                    <h1>COMPANY</h1>
                    <ul>
                        <li>About</li>
                        <li>Help</li>
                        <li>Support</li>
                        <li>Jobs</li>
                        <li>Dictionary</li>
                    </ul>
                </section>
                <section className="flex">
                    <h1>ONE MORE</h1>
                    <ul>
                        <li>Meetings</li>
                        <li>Handbook</li>
                        <li>Privacy</li>
                        <li>API</li>
                        <li>Equipment</li>
                    </ul>
                </section>
                <section className="flex">
                    <h1>THE LAST ONE</h1>
                    <ul>
                        <li>Meetings</li>
                        <li>Handbook</li>
                        <li>Privacy</li>
                        <li>API</li>
                        <li>Equipment</li>
                    </ul>
                </section>

                <section className="social">
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-facebook-square"></i>
                    <i className="fab fa-linkedin"></i>
                    <i className="fab fa-instagram"></i>
                </section>


               <section class="copy">
                    2021 Copyright &copy; <br></br>
                    NaturesAmruta.com<br></br>
                    Privacy policy|Terms Of Service
                </section>
               
            </footer>
           
        )
    }
}

export default Footer
