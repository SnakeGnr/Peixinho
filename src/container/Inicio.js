
import React from 'react';
import { Container, Row, Col, Mask, Fa,View,  Button } from 'mdbreact';
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import '../App.css';
// import prato1 from '../img/prato1.jpg';


const Inicio = () => {
    return (

        <Container>
            <div >
                <div className="row mb-5">
                    <div className="col-md-12">
                        <div className="card card-image backgroundJumbo" >
                            <div className="text-white text-center rgba-stylish-strong py-5 px-4">
                                <div className="py-5 meh">


                                    <h2 className="blue-text font-bold ">Bem Vindo</h2>
                                    <h1 className="card-title pt-3 mb-5 font-bold ">Peixinho Restaurante & Pizzaria</h1>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

             <div className="jumbotron backgroundJumbo2">
             <h2 className="blue-text font-bold ">Sobre nós</h2>
                                        <p className=" pHead ">O restaurante peixinho é um ambiente familiar bem requintado, temos diversos pratos e porções,
                                        oferecemos também rodízio de peixes e de pizza, fique a vontade para navegar, aproveite e acesse o nosso cardápio.
                           </p>

                                    </div>
            <div className="margeCorpo jumbotron backgroundJumbo3">
            
                <Row id="tCardapio">

                    <Col lg="6">
                        <a className="green-text"><h6 className="font-weight-bold mb-3"><Fa icon="cutlery" className="pr-2"></Fa>Comida</h6></a>
                        <h3 className="font-weight-bold mb-3 p-0"><strong>Cardápio</strong></h3>
                        <p>Servimos rodízio de pizza, peixes e massas. Também temos uma diversa variedade de pratos e porções, confira!</p>

                        <Button color="success" size="md" className="waves-light ">Leia mais</Button>
                    </Col>
                    <Col lg="6">
                        <View className="rounded z-depth-2 mb-lg-0 mb-4 ">
                            <img className="img-fluid " src={require('../img/novas/prato/fpratoPrincipal.jpg')} alt="My Awesome Image" />
                            {/* <img className="img-fluid" src={prato1} /> */}
                            <a href="/Pratos"><Mask overlay="white-slight" /></a>
                        </View>
                    </Col>
                </Row>

                <hr className="my-5" />
                <Row id="tAmbiente">

                    <Col lg="6">
                        <View className="rounded z-depth-2 mb-lg-0 mb-4 " >
                            <img className="img-fluid " src={require('../img/novas/ambiente/fdentro.jpg')}  />
                            <a><Mask overlay="white-slight" /></a>
                        </View>
                    </Col>
                    <Col lg="6">
                        <a className="pink-text">
                            <h6 className="font-weight-bold mb-3">
                                <Fa icon="image" className="pr-2"></Fa>Espaço
            </h6>
                        </a>
                        <h3 className="font-weight-bold mb-3 p-0"><strong>Ambiente</strong></h3>
                        <p>Possuimos um ótimo espaço interno bem rústico e aconchegante. </p>

                        <Button color="pink" size="md" className="mb-lg-0 mb-4 waves-light">Leia mais</Button>
                    </Col>
                </Row>
                <hr className="my-5" />
                <Row id="tLocal">

                    <Col lg="6">
                        <a className="indigo-text"><h6 className="font-weight-bold mb-3"><i  className="fa fa-map-marker"></i>    Mapa</h6></a>
                        <h3 className="font-weight-bold mb-3 p-0"><strong>Localização</strong></h3>
                        <p>Estamos situados na Rua Frei Orlando, 690 (Esquina com victor ferreira do amaral)
                                            Jardim Social - Curitiba - Paraná .</p>

                        {/* <Button color="indigo" size="md" className="waves-light ">Read more</Button> */}
                    </Col>
                    <Col lg="6">
                    
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14411.729235974411!2d-49.26335181215946!3d-25.44052651350772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd0a48e45bdfd626f!2sRestaurante+Peixinho+%26+Pizzaria!5e0!3m2!1spt-BR!2sbr!4v1536954049663" width="350" height="300" frameBorder="0"></iframe>
                        
                    </Col>
                </Row>
            </div>
        </Container>

    );
}
export default Inicio;