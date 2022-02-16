import React, { Component } from 'react'
import { Container,Card,Button ,Row} from 'react-bootstrap'

export class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pro: []
        }
    }
    componentDidMount = async () => {
        try {
            const URL = "  http://localhost:3001/products";
            const res = await fetch(URL);
            const resData = await res.json();
            this.setState({ pro: resData });
            console.log(this.state.pro)
        }
        catch (err) {
            console.log(err)
        }

    }
    render() {
        return (
            <div>
                <Container>
                    <h1>Gallery</h1>
                    <Row>
                    {
                        this.state.pro.map((p) =>
                            <Card style={{ width: '18rem' }} className="bg-warning">
                                <Card.Img variant="top" src={p.imgsrc} />
                                <Card.Body>
                                    <Card.Title>{p.ProductName}</Card.Title>
                                    <Card.Text>
                                       Quantity:{p.Quantity} Price:{p.Price}
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        )
                    }
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Products
