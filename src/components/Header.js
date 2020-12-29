import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const Header = (props) => {
  const { firstName } = props;
  return (
    <header>
      <h1>Redux Demo</h1>
      <p>Welcome {firstName}!</p>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

Header.defaultProps = {
  firstName: '',
}

Header.propTypes = {
  firstName: PropTypes.string,
}

const mapStateToProps = (state) => ({
  firstName: state.userProfile.firstName,
});

// If you don't have a dispatch, you can just put null where it would usually go
export default connect(
  mapStateToProps,
  null,
)(Header);