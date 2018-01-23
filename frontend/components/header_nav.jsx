import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
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

  handleLogout = e => {
    e.preventDefault();
    this.props.logout();
    this.setState({ loggedIn: false });
  }

  handleLogin = () => {
    this.setState({ loggedIn: true });
  }

  componentWillMount() {
    this.props.fetchCategories();
  }

  renderCategories() {
    return this.props.categories.map(category => (
      <NavLink key={category.name} className="nav-links"
        to={`/category/${category.id}`} >
        {category.name}
      </NavLink>
    ));
  }

  render() {
    const categories = this.renderCategories();

    return (
      <nav className="header-nav">
        <ul>
          <NavLink to="/" className="nav-links main-logo">theShop</NavLink>
          {categories}
          <NavLink to="/cart" className="nav-links cart"><i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i></NavLink>
          {this.state.loggedIn ? <button onClick={this.handleLogout}>Log Out</button>
        : <button><SessionModal handleLogin={this.handleLogin}/></button>
          }
        </ul>
      </nav>
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
