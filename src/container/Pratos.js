import React from "react";
import { Container, Row, Col } from 'mdbreact';
import Lightbox from 'react-image-lightbox';
import '../style.css'
import '../App.css';

const images = [
    'https://peixepizzariarestaurante.com.br/img/pratoPrincipal.jpg',
    'https://peixepizzariarestaurante.com.br/img/prato1.jpg',
  'https://peixepizzariarestaurante.com.br/img/prato2.jpg',
  'https://peixepizzariarestaurante.com.br/img/prato3.jpg',
  'https://peixepizzariarestaurante.com.br/img/prato4.jpg',
  'https://peixepizzariarestaurante.com.br/img/prato5.jpg',
  'https://peixepizzariarestaurante.com.br/img/prato6.jpg',
  'https://peixepizzariarestaurante.com.br/img/prato7.jpg'

];

const smallImages = [
    'https://peixepizzariarestaurante.com.br/img/ppratoPrincipal.jpg',
  'https://peixepizzariarestaurante.com.br/img/pprato1.jpg',
  'https://peixepizzariarestaurante.com.br/img/pprato2.jpg',
  'https://peixepizzariarestaurante.com.br/img/pprato3.jpg',
  'https://peixepizzariarestaurante.com.br/img/pprato4.jpg',
  'https://peixepizzariarestaurante.com.br/img/pprato5.jpg',
  'https://peixepizzariarestaurante.com.br/img/pprato6.jpg',
  'https://peixepizzariarestaurante.com.br/img/pprato7.jpg'
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
        <h2 className="blue-text font-bold text-center">Pratos da casa</h2>
          <Row>
            <Col md="4">
              <figure>
                <img src={smallImages[0]} alt="Gallery" className="img-fluid" onClick={() => this.setState({ photoIndex: 0, isOpen: true })} />
                <figcaption>Todos nossos pratos acompanham porção de arroz, pure, vinagrete, salada, batata ou mandioca.</figcaption>
              </figure>
            </Col>
            <Col md="4">
              <figure>
                <img src={smallImages[1]} alt="Gallery" className="img-fluid" onClick={() => this.setState({ photoIndex: 1, isOpen: true })} />
                <figcaption>Peixe a Parmegianna</figcaption>
              </figure>
             
            </Col>
            <Col md="4">
              <figure>
                <img src={smallImages[2]} alt="Gallery" className="img-fluid" onClick={() => this.setState({ photoIndex: 2, isOpen: true })} />
                <figcaption>Peixe a Parmegianna</figcaption>
              </figure>
            </Col>
            <Col md="4">
              <figure>
                <img src={smallImages[3]} alt="Gallery" className="img-fluid" onClick={() => this.setState({ photoIndex: 3, isOpen: true })} />
                <figcaption>Peixe a Parmegianna</figcaption>
              </figure>
            </Col>
            <Col md="4">
              <figure>
                <img src={smallImages[4]} alt="Gallery" className="img-fluid" onClick={() => this.setState({ photoIndex: 4, isOpen: true })} />
                <figcaption>Peixe a Parmegianna</figcaption>
              </figure>
            </Col>
            <Col md="4">
              <figure>
                <img src={smallImages[5]} alt="Gallery" className="img-fluid" onClick={() => this.setState({ photoIndex: 5, isOpen: true })} />
                <figcaption>Peixe a Parmegianna</figcaption>
              </figure>
            </Col>
            <Col md="4">
              <figure>
                <img src={smallImages[6]} alt="Gallery" className="img-fluid" onClick={() => this.setState({ photoIndex: 6, isOpen: true })} />
                <figcaption>Peixe a Parmegianna</figcaption>
              </figure>
            </Col>
            <Col md="4">
              <figure>
                <img src={smallImages[7]} alt="Gallery" className="img-fluid" onClick={() => this.setState({ photoIndex: 7, isOpen: true })} />
                <figcaption>Peixe a Parmegianna</figcaption>
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