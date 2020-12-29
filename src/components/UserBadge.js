import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const UserBadge = (props) => {
  const { firstName, lastName } = props;
  return (
    <div className="card">
      <img src="https://pyxis.nymag.com/v1/imgs/74b/2a3/6c8160504678c445e7d5da6679f4c22748-25-SarahConnor.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{`${firstName} ${lastName}`}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <button className="btn btn-primary">Go somewhere</button>
      </div>
    </div>
  );
};

UserBadge.defaultProps = {
  firstName: '',
  lastName: '',
}

UserBadge.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
}

const mapStateToProps = (state) => ({
  firstName: state.userProfile.firstName,
  lastName: state.userProfile.lastName,
});

export default connect(mapStateToProps, null)(UserBadge);