import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const UserTable = (props) => {
  const { friends } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {friends.map((friend) => {
          return (
            <tr>
              <td>{friend}</td>
              <td>
                <button className="btn btn-success btn-sm mr-1">Visit</button>
                <button className="btn btn-danger btn-sm">Unfriend</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

UserTable.defaultProps = {
  friends: [],
}

UserTable.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.string,
  )
}

const mapStateToProps = (state) => ({
  friends: state.userProfile.friends,
});

export default connect(mapStateToProps, null)(UserTable);