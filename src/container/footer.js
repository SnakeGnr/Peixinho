import React from "react";
import "font-awesome/css/font-awesome.min.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "mdbreact/dist/css/mdb.css"
import '.././App.css';

const Footer = () => (
    <div>

        <footer className="page-footer font-small unique-color-dark">

            <div className="colorGeral">
                <div className="container">


                    <div className="row py-4 d-flex align-items-center">


                        <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                            <h4 className="mb-0">Conecte-se a nossas redes sociais</h4>
                        </div>

                        <div className="col-md-6 col-lg-7 text-center text-md-right">


                            <a className="fb-ic" href="https://www.facebook.com/restaurantepeixinho.net/" target="resource window">
                                <i className="fa fa-facebook white-text mr-4 fa-2x"> </i>
                            </a>

                            <a className="tw-ic">
                                <i className="fa fa-twitter white-text mr-4 fa-2x"> </i>
                            </a>

                            <a className="gplus-ic">
                                <i className="fa fa-google-plus white-text mr-4 fa-2x"> </i>
                            </a>

                            <a className="li-ic">
                                <i className="fa fa-linkedin white-text mr-4 fa-2x"> </i>
                            </a>

                            <a className="ins-ic">
                                <i className="fa fa-instagram white-text fa-2x"> </i>
                            </a>

                        </div>


                    </div>


                </div>
            </div>


            <div className="container text-center text-md-left mt-5">


                <div className="row mt-3">


                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 pFoot">

                        <h5 className="text-uppercase font-weight-bold">Horário de atendimento</h5>
                        <hr className="colorLine accent-2 mb-4 mt-0 d-inline-block mx-auto line1" />
                        <p>Almoço todos os dias dás 11:30hrs até as 15:00hrs </p>
                        <p>
                            Jantar de terça a sábado dás 18:30hrs até ás 23:00hrs.
                        </p>

                    </div>

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 pFoot">

                        <h5 className="text-uppercase font-weight-bold">Rodízios</h5>
                        <hr className="colorLine accent-2 mb-4 mt-0 d-inline-block mx-auto line2" />
                        <p>
                            Rodízio de Peixe e massas todos os dias no almoço e nos jantares de sexta e sábado.
                        </p>
                        <p>
                            Rodízio de Pizza de terça a sábado no jantar.
                        </p>



                    </div>

                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4" >

                        <h5 className="text-uppercase font-weight-bold">Cardápio</h5>
                        <hr className="colorLine accent-2 mb-4 mt-0 d-inline-block mx-auto line3" />
                        <p>
                            <a href="/Ambiente">PIZZAS</a>

                        </p>
                        <p>
                            <a href="#!">PRATOS</a>
                        </p>
                        <p>
                            <a href="#!">PORÇÕES</a>
                        </p>
                        <p>
                            <a href="#!">BEBIDAS</a>
                        </p>

                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 pFoot">


                        <h5 className="text-uppercase font-weight-bold">Contato</h5 >
                        <hr className="colorLine accent-2 mb-4 mt-0 d-inline-block mx-auto line4" />
                        <p>
                            <i className="fa fa-home mr-3"></i> Rua Frei Orlando, 690
                                            Jardim Social - Curitiba</p>
                        <p>
                            <i className="fa fa-envelope mr-3"></i>restpeixinho@gmail.com</p>
                        <p>
                            <i className="fa fa-phone mr-3"></i> (41) 3264-4278</p>
                        <p>
                            <i className="fa fa-mobile-phone mr-3"></i> (41) 99792-8558</p>

                    </div>

                </div>

            </div>

            <div className="footer-copyright text-center py-3">
                <p>© 2018 Copyright:
                  <a href="https://mdbootstrap.com/bootstrap-tutorial/" target="resource window"> MDBootstrap.com</a> -
                  <a href="https://github.com/SnakeGnr/" target="resource window"> @Dev</a>
                </p>
            </div>


        </footer>

    </div>

);

export default Footer;