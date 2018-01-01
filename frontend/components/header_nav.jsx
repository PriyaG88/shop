import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, Modal, Button } from 'react-bootstrap';
import SessionModal from './session_modal';
import { logout } from '../actions/session_actions';
import { allCategories } from '../reducers/selector';
import { fetchCategories } from '../actions/category_actions';

class HeaderNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: this.props.loggedIn
    };
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
    this.setState({ loggedIn: false });
  }

  handleLogin(e) {
    this.setState({ loggedIn: true });
  }

  componentWillMount() {
    this.props.fetchCategories();
  }

  renderCategories() {
    return this.props.categories.map(category => (
      <a key={category.name} className='category-links'
        href={`#/category/${category.id}`} >
        {category.name}
      </a>
    ));
  }

  render() {
    const categories = this.renderCategories();

    return (
      <Navbar className='header-nav'>
        <Navbar.Header>
          <Navbar.Brand className='logo'>
            <a href="/" className='logo'>theShop</a>
          </Navbar.Brand>
        </Navbar.Header>
        <div className='nav-links'>
          {categories}
          <Nav pullRight>
            <i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
            {this.state.loggedIn ? <Button onClick={this.handleLogout.bind(this)}>Log Out</Button>
          : <Button><SessionModal handleLogin={this.handleLogin.bind(this)}/></Button>
            }
          </Nav>
        </div>
      </Navbar>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  categories: allCategories(state)
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchCategories: () => dispatch(fetchCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderNav);
