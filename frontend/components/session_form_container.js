const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.currentUser),
  errors: state.errors
});
