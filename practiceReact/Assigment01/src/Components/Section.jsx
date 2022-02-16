import React, { Component } from 'react'
import Cards from './Cards'
import img1 from '../IMGS/img5.jpg';
import img2 from '../IMGS/img6.jpg';
import img3 from '../IMGS/img7.jpg';

export class Section extends Component {
    render() {
        return (
            <div>
              <section className="cards">
               <Cards img={img1}  title="Leave the road, take the trails." name="Frank Lloyd Wright, Mumbai, 21" class="img1" cardName="card1"/>
               <Cards img={img2}  title="Land really is the best art. " name="Wendell Berry, Kedarnath, 33" class="img2" cardName="card2"/>
               <Cards img={img3}  title=" Colors are the smiles of nature." name="Leigh Hunt, Kashmir, 40" class="img3" cardName="card3"/>

               
          </section>
          </div>
        )
    }
}

export default Section
