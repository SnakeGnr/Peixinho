import React from 'react';
import { Container, Row, Col } from 'mdbreact';
import Lightbox from 'react-image-lightbox';
import '../style.css'
import '../App.css';



const images = [
    'https://peixepizzariarestaurante.com.br/img/fora.jpg',
    'https://peixepizzariarestaurante.com.br/img/fora3.jpg',
  'https://peixepizzariarestaurante.com.br/img/dentro.jpg',
  'https://peixepizzariarestaurante.com.br/img/dentro1.jpg',
  'https://peixepizzariarestaurante.com.br/img/dentro2.jpg',
  'https://peixepizzariarestaurante.com.br/img/dentro3.jpg',
  'https://peixepizzariarestaurante.com.br/img/dentro4.jpg',
  'https://peixepizzariarestaurante.com.br/img/dentro6.jpg',
  'https://peixepizzariarestaurante.com.br/img/dentro7.jpg',
  'https://peixepizzariarestaurante.com.br/img/dentro8.jpg',
  'https://peixepizzariarestaurante.com.br/img/dentro9.jpg',
  'https://peixepizzariarestaurante.com.br/img/dentro10.jpg',
  'https://peixepizzariarestaurante.com.br/img/dentro11.jpg',
  'https://peixepizzariarestaurante.com.br/img/dentro12.jpg',
  'https://peixepizzariarestaurante.com.br/img/dentro13.jpg',
  'https://peixepizzariarestaurante.com.br/img/fora1.jpg',
  'https://peixepizzariarestaurante.com.br/img/fora4.jpg',
  'https://peixepizzariarestaurante.com.br/img/fora5.jpg',
  'https://peixepizzariarestaurante.com.br/img/fora6.jpg',
  'https://peixepizzariarestaurante.com.br/img/fora7.jpg'
];

const smallImages = [
    'https://peixepizzariarestaurante.com.br/img/pfora.jpg',
    'https://peixepizzariarestaurante.com.br/img/pfora3.jpg',
  'https://peixepizzariarestaurante.com.br/img/pdentro.jpg',
  'https://peixepizzariarestaurante.com.br/img/pdentro1.jpg',
  'https://peixepizzariarestaurante.com.br/img/pdentro2.jpg',
  'https://peixepizzariarestaurante.com.br/img/pdentro3.jpg',
  'https://peixepizzariarestaurante.com.br/img/pdentro4.jpg',
  'https://peixepizzariarestaurante.com.br/img/pdentro6.jpg',
  'https://peixepizzariarestaurante.com.br/img/pdentro7.jpg',
  'https://peixepizzariarestaurante.com.br/img/pdentro8.jpg',
  'https://peixepizzariarestaurante.com.br/img/pdentro9.jpg',
  'https://peixepizzariarestaurante.com.br/img/pdentro10.jpg',
  'https://peixepizzariarestaurante.com.br/img/pdentro11.jpg',
  'https://peixepizzariarestaurante.com.br/img/pdentro12.jpg',
  'https://peixepizzariarestaurante.com.br/img/pdentro13.jpg',
  'https://peixepizzariarestaurante.com.br/img/pfora1.jpg',
  'https://peixepizzariarestaurante.com.br/img/pfora4.jpg',
  'https://peixepizzariarestaurante.com.br/img/pfora5.jpg',
  'https://peixepizzariarestaurante.com.br/img/pfora6.jpg',
  'https://peixepizzariarestaurante.com.br/img/pfora7.jpg'
];

class LightboxPage extends React.Component  {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    return(


    <div >

        
    <Container className="mt-5 jumbotron backgroundJumbo2 galeria">
   
        <div className="mdb-lightbox ">
        <h2 className="blue-text font-bold text-center">Ambiente</h2>
          <Row>
            <Col md="4">
              <figure>
                <img src={smallImages[0]} alt="Gallery" className="img-fluid" onClick={() => this.setState({ photoIndex: 0, isOpen: true })} />
              </figure>
            </Col>
            <Col md="4">
              <figure>
                <img src={smallImages[1]} alt="Gallery" className="img-fluid" onClick={() => this.setState({ photoIndex: 1, isOpen: true })} />
              </figure>
            </Col>
            <Col md="4">
              <figure>
                <img src={smallImages[2]} alt="Gallery" className="img-fluid" onClick={() => this.setState({ photoIndex: 2, isOpen: true })} />
              </figure>
            </Col>
            <Col md="4">
              <figure>
                <img src={smallImages[3]} alt="Gallery" className="img-fluid" onClick={() => this.setState({ photoIndex: 3, isOpen: true })} />
              </figure>
            </Col>
            <Col md="4">
              <figure>
                <img src={smallImages[4]} alt="Gallery" className="img-fluid" onClick={() => this.setState({ photoIndex: 4, isOpen: true })} />
              </figure>
            </Col>
            <Col md="4">
              <figure>
                <img src={smallImages[5]} alt="Gallery" className="img-fluid" onClick={() => this.setState({ photoIndex: 5, isOpen: true })} />
              </figure>
            </Col>
            <Col md="4">
              <figure>
                <img src={smallImages[6]} alt="Gallery" className="img-fluid" onClick={() => this.setState({ photoIndex: 6, isOpen: true })} />
              </figure>
            </Col>
            <Col md="4">
              <figure>
                <img src={smallImages[7]} alt="Gallery" className="img-fluid" onClick={() => this.setState({ photoIndex: 7, isOpen: true })} />
              </figure>
            </Col>
            <Col md="4">
              <figure>
                <img src={smallImages[8]} alt="Gallery" className="img-fluid" onClick={() => this.setState({ photoIndex: 8, isOpen: true })} />
              </figure>
            </Col>
            <Col md="4">
              <figure>
                <img src={smallImages[9]} alt="Gallery" className="img-fluid" onClick={() => this.setState({ photoIndex: 9, isOpen: true })} />
              </figure>
            </Col>
            <Col md="4">
              <figure>
                <img src={smallImages[10]} alt="Gallery" className="img-fluid" onClick={() => this.setState({ photoIndex: 10, isOpen: true })} />
              </figure>
            </Col>
            <Col md="4">
              <figure>
                <img src={smallImages[11]} alt="Gallery" className="img-fluid" onClick={() => this.setState({ photoIndex: 11, isOpen: true })} />
              </figure>
            </Col>
            <Col md="4">
              <figure>
                <img src={smallImages[12]} alt="Gallery" className="img-fluid" onClick={() => this.setState({ photoIndex: 12, isOpen: true })} />
              </figure>
            </Col>
            <Col md="4">
              <figure>
                <img src={smallImages[13]} alt="Gallery" className="img-fluid" onClick={() => this.setState({ photoIndex: 13, isOpen: true })} />
              </figure>
            </Col>
            <Col md="4">
              <figure>
                <img src={smallImages[14]} alt="Gallery" className="img-fluid" onClick={() => this.setState({ photoIndex:14, isOpen: true })} />
              </figure>
            </Col>
            <Col md="4">
              <figure>
                <img src={smallImages[15]} alt="Gallery" className="img-fluid" onClick={() => this.setState({ photoIndex: 15, isOpen: true })} />
              </figure>
            </Col>
            <Col md="4">
              <figure>
                <img src={smallImages[16]} alt="Gallery" className="img-fluid" onClick={() => this.setState({ photoIndex: 16, isOpen: true })} />
              </figure>
            </Col>
            <Col md="4">
              <figure>
                <img src={smallImages[17]} alt="Gallery" className="img-fluid" onClick={() => this.setState({ photoIndex: 17, isOpen: true })} />
              </figure>
            </Col>
            <Col md="4">
              <figure>
                <img src={smallImages[18]} alt="Gallery" className="img-fluid" onClick={() => this.setState({ photoIndex: 18, isOpen: true })} />
              </figure>
            </Col>
               </Row>
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            imageTitle={photoIndex + 1 + '/' + images.length}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </Container>
      </div>
    );
  }
};

export default LightboxPage;