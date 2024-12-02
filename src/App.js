import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//import "bootstrap/dist/css/bootstrap.css"
import Accordion from 'react-bootstrap/Accordion';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
//import ExampleCarouselImage from 'components/ExampleCarouselImage';


function App() {
  return (
    <div className="App">
      <h2 style={{color:'gold'}}>Home accessories</h2>
      
  
      <div>

      <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          ><Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="https://www.amazon.in/storage-furniture/s?k=storage+furniture">Storage & organisation</Nav.Link>
            <Nav.Link href="https://www.amazon.in/Furniture/b?ie=UTF8&node=1380441031&discounts-widget=%2522%257B%255C%
            2522state%255C%2522%253A%257B%255C%2522refinementFilters%255C%2522%253A%257B%257D%257D%
            252C%255C%2522version%255C%2522%253A1%257D%2522">Furniture</Nav.Link>
            <Nav.Link href="https://www.flipkart.com/furniture/mattresses/pr?sid=wwe,rg9">Beds & mattresses</Nav.Link>
            <Nav.Link href="https://www.amazon.in/Indoor-Lighting/b?ie=UTF8&node=1380485031"> Lighting</Nav.Link>
            <Nav.Link href="https://www.flipkart.com/home-decor/pr?sid=arb"> Decoration</Nav.Link>
            
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      </div>

      <hr></hr>

      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Winter Appliance</Accordion.Header>
        <Accordion.Body>
          
        
<div className="container">
  <div className="row">
    <div className="col">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/31n1rUaHGEL._SR290,290_.jpg" />
      <Card.Body style={{backgroundColor:'lightpink'}}>
        <Card.Title>Geyser</Card.Title>
        <Card.Text>
        Rs.5,699<br></br>
         Crompton Arno Neo 15-L 5 Star Rated Storage Water Heater
         
         </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
    </div>


    <div className="col">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/61kWgebw2AL._AC_UF894,1000_QL80_.jpg" />
      <Card.Body style={{backgroundColor:'lightpink'}}>
        <Card.Title>Kettle</Card.Title>
        <Card.Text>
         Rs.549<br></br>
        Glen Electric Kettle Aqua plus 1250 Watts 1.2 litres
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
    </div>

    

    <div className="col">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/41r4ButsNxL._SR290,290_.jpg" />
      <Card.Body style={{backgroundColor:'lightpink'}}>
        <Card.Title>Room Heater</Card.Title>
        <Card.Text>
         Rs.999<br></br>
        Buyerzone Handy Electric Heater, 400 Watts Heater
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
    </div>



    <div className="col">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/41cndsisyOL._SR290,290_.jpg" />
      <Card.Body style={{backgroundColor:'lightpink'}}>
        <Card.Title>Air Purifier</Card.Title>
        <Card.Text>
          Rs.8,799<br></br>
         Levoit Air purifier for home allergies and pets hair smokers in bedroom
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
    </div>
  </div>
</div>





        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Living Room Appliance</Accordion.Header>
        <Accordion.Body>
      
<div className="container">
  <div className="row">
    <div className="col">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/61lSoYDOx6L._AA360_AC_QL70_.jpg" />
      <Card.Body style={{backgroundColor:'teal', color:"white" }}>
        <Card.Title>Sofa</Card.Title>
        <Card.Text>
        Rs.16,699<br></br>
         Adorn india aspen 3 seater sofa cum bed 
         
         </Card.Text>
        <Button variant="warning">Add to cart</Button>
      </Card.Body>
    </Card>
    </div>


    <div className="col">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71ygH0ju8rL._SX425_.jpg" />
      <Card.Body style={{backgroundColor:'teal', color:"white" }}>
        <Card.Title>Carpet</Card.Title>
        <Card.Text>
         Rs.869<br></br>
         ishro home 3-5feet Multi printed carper rug runner
        </Card.Text>
        <Button variant="warning">Add to cart</Button>
      </Card.Body>
    </Card>
    </div>

    

    <div className="col">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/51gWn3UErbL._SR290,290_.jpg" />
      <Card.Body style={{backgroundColor:'teal', color:"white" }}>
        <Card.Title>Cushion covers</Card.Title>
        <Card.Text>
         Rs.736<br></br>
        ACN kohinoor macrame hand made cushioncover 16inch 
        </Card.Text>
        <Button variant="warning">Add to cart</Button>
      </Card.Body>
    </Card>
    </div>



    <div className="col">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/61-mRvrUCXL._SR290,290_.jpg" />
      <Card.Body style={{backgroundColor:'teal', color:"white" }}>
        <Card.Title>Plant Stand</Card.Title>
        <Card.Text>
          Rs.1,299<br></br>
         Bee creative multi-tiered metal flower pot stand 
        </Card.Text>
        <Button variant="warning">Add to cart</Button>
      </Card.Body>
    </Card>
    </div>
  </div>
</div>



        </Accordion.Body>
      </Accordion.Item>
    </Accordion> 
        

      <hr></hr>


<div>
<Carousel>
      <Carousel.Item>
        {/*<ExampleCarouselImage text="First slide" />*/}
        <Card style={{ width: '60rem' }}>
      <Card.Img variant="top" src="https://media-uk-india-banners.landmarkshops.in/Home-Centre/HC-Mobile-2-Offer-060917.jpg" />
    </Card>
        <Carousel.Caption>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        {/*<ExampleCarouselImage text="First slide" />*/}
        <Card style={{ width: '60rem' }}>
      <Card.Img variant="top" src="https://media-uk-india-banners.landmarkshops.in/Home-Centre/HC-Mobile-4-Offer-060917.jpg" />
    </Card>
        <Carousel.Caption>
        </Carousel.Caption>
        </Carousel.Item>

      <Carousel.Item>
       {/* <ExampleCarouselImage text="Second slide" />*/}
       <Card style={{ width: '60rem' }}>
      <Card.Img variant="top" src="https://media-uk-india-banners.landmarkshops.in/Home-Centre/HC-Mobile-1-Offer-070917.jpg" />
    </Card>
        <Carousel.Caption>
       </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
       {/* <ExampleCarouselImage text="Third slide" />*/}
       <Card style={{ width: '60rem' }}>
      <Card.Img variant="top" src="https://media-uk-india-banners.landmarkshops.in/Home-Centre/HC-Mobile-3-Offer-060917.jpg" />
    </Card>
        <Carousel.Caption>
       </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
</div>
      
  <hr></hr>

  <div className="container">
  <div className="row">
    <div className="col">
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src="https://www.ikea.com/in/en/images/products/
      jaettelilja-duvet-cover-and-pillowcase-white-floral-patterned__0801129_ph165863_s5.jpg?f=s" />
      <Card.Body style={{backgroundColor:'rgb(194.4, 225, 132)'}}>
        <Card.Title>SAFFEROT DUVET</Card.Title>
        <Card.Text>
        Rs.1,190<br></br>
         Cozy winter blankets to keep you warm all season
         
         </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
    </div>


    <div className="col">
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src="https://www.ikea.com/in/en/images/products/naemmaroe
      -lounge-chair-outdoor-light-brown-stained__1185528_pe898427_s5.jpg" />
      <Card.Body  style={{backgroundColor:'rgb(194.4, 225, 132)'}}>
        <Card.Title>TARNO</Card.Title>
        <Card.Text>
         Rs.5,909<br></br>
        Perfect outdoor furniture for winter evenings
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
    </div>

    



    <div className="col">
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src="https://www.ikea.com/nl/en/images/products/applaryd
      -3-seat-sofa-with-chaise-longue-gunnared-light-blue__1356633_pe953412_s5.jpg?f=s" />
      <Card.Body  style={{backgroundColor:'rgb(194.4, 225, 132)'}}>
        <Card.Title>APPLARYD</Card.Title>
        <Card.Text>
          Rs.9,799<br></br>
         Beautifully made, thoughfully designed
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
    </div>
  </div>
</div>

<hr></hr>
<div className="container">
  <div className="row">
    <div className="col">
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src="https://images.meesho.com/images/products/306184942/vzi0l_512.webp" />
      <Card.Body style={{backgroundColor:"orange"}}>
        <Card.Title>Home decoration</Card.Title>
        
        <Button variant="light">Shop Now</Button>
      </Card.Body>
    </Card>
    </div>


    <div className="col">
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71bgvbKfjeL.jpg" />
      <Card.Body  style={{backgroundColor:"orange"}}>
        <Card.Title>Children Room accessroies</Card.Title>
        
        <Button variant="light">Shop Now</Button>
      </Card.Body>
    </Card>
    </div>

    



    <div className="col">
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src="https://www.ikea.com/in/en/images/products/nesttun-bed-frame-white-luroey__0734551_pe739500_s5.jpg" />
      <Card.Body  style={{backgroundColor:"orange"}}>
        <Card.Title>Bedding</Card.Title>
        
        <Button variant="light">Shop Now</Button>
      </Card.Body>
    </Card>
    </div>
  </div>
</div>



    </div>
    
  );
}

export default App;

