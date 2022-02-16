import React, { Component } from 'react';
import Aside from './Aside';
import imgs1 from '../IMGS/img8.jpg';
import imgs2 from '../IMGS/img9.jpg';
import imgs3 from '../IMGS/img10.jpg';

export class Authors extends Component {
    render() {
        return (
            <div>
            <section className="cards2">
                <Aside class="imgs" date="Oct 20" content="Adopt the pace of nature. Her secret is patience."
                img={imgs1} />
                <Aside class="imgs1" date="Feb 21" content=" Many eyes go through the meadow, but few see the flowers in it."
                img={imgs2} />
                <Aside class="imgs2" date="March 21" content=" There are always flowers for those who want to see them.."
                img={imgs3} />
            </section>
            </div>
        )
    }
}

export default Authors
