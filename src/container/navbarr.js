import React from 'react';
import { Dropdown, DropdownItem, DropdownToggle, DropdownMenu, Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import '../App.css';

class Navbarr extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    render() {
        return (
            <div>
                <Router>
                    <Navbar className="colorGeral fixed-top" dark expand="md" scrolling>
                        <NavbarBrand href="/">
                            <strong className="teste">Peixinho</strong>
                        </NavbarBrand>
                        {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
                        <Collapse isOpen={this.state.collapse} navbar>
                            <NavbarNav left>
                                <NavItem active>
                                    <NavbarBrand href="/">Inicio </NavbarBrand>
                                </NavItem>
                                <NavItem>
                                    <Dropdown>
                                        <DropdownToggle nav caret>Cardapio</DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem href="/Pizzas">Pizzas</DropdownItem>
                                            <DropdownItem href="/Pratos">Pratos</DropdownItem>
                                            <DropdownItem href="/Porcoes">Porções</DropdownItem>
                                            <DropdownItem href="/Bebidas">Bebidas</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </NavItem>
                                <NavItem>
                                    <NavbarBrand href="/Ambiente">Ambiente</NavbarBrand>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/Ambiente">Ambiente</NavLink>
                                </NavItem>

                            </NavbarNav>
                            <NavbarNav right>

                            </NavbarNav>
                        </Collapse>
                    </Navbar>
                </Router>

            </div>
        );
    }
}

export default Navbarr;