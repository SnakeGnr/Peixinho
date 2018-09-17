import React from "react";
import { Container, Row, Col } from 'mdbreact';
import Lightbox from 'react-image-lightbox';
import '../style.css'
import '../App.css';

const images = [
    'https://peixepizzariarestaurante.com.br/img/porcaoPrincipal.jpg',
    'https://peixepizzariarestaurante.com.br/img/porcao1.jpg',
  'https://peixepizzariarestaurante.com.br/img/porcao2.jpg',
  'https://peixepizzariarestaurante.com.br/img/porcao3.jpg',
  'https://peixepizzariarestaurante.com.br/img/porcao4.jpg',
  'https://peixepizzariarestaurante.com.br/img/porcao5.jpg',
  'https://peixepizzariarestaurante.com.br/img/porcao6.jpg',
  'https://peixepizzariarestaurante.com.br/img/porcao7.jpg',
  'https://peixepizzariarestaurante.com.br/img/porcao8.jpg'

];

const smallImages = [
    'https://peixepizzariarestaurante.com.br/img/pporcaoPrincipal.jpg',
    'https://peixepizzariarestaurante.com.br/img/pporcao1.jpg',
  'https://peixepizzariarestaurante.com.br/img/pporcao2.jpg',
  'https://peixepizzariarestaurante.com.br/img/pporcao3.jpg',
  'https://peixepizzariarestaurante.com.br/img/pporcao4.jpg',
  'https://peixepizzariarestaurante.com.br/img/pporcao5.jpg',
  'https://peixepizzariarestaurante.com.br/img/pporcao6.jpg',
  'https://peixepizzariarestaurante.com.br/img/pporcao7.jpg',
  'https://peixepizzariarestaurante.com.br/img/pporcao8.jpg'

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
        <h2 className="blue-text font-bold text-center">Porções da casa</h2>
          <Row>
            <Col md="4">
              <figure>
                <img src={smallImages[0]} alt="Gallery" className="img-fluid" onClick={() => this.setState({ photoIndex: 0, isOpen: true })} />
                <figcaption>Porções</figcaption>
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
            <Col md="4">
              <figure>
                <img src={smallImages[8]} alt="Gallery" className="img-fluid" onClick={() => this.setState({ photoIndex: 8, isOpen: true })} />
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