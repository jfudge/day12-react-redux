import { useState } from 'react';
import { connect } from 'react-redux';

// Import the actions that I need to dispatch
import { changeName } from '../redux/actions';

const NameChange = (props) => {
  const { firstName, lastName, dispatchNameChange } = props;
  const [firstNameInput, setFirstNameInput] = useState(firstName);
  const [lastNameInput, setLastNameInput] = useState(lastName);

  console.log(props);

  // Submit function
  const updateName = () => {
    const nameObject = {
      firstName: firstNameInput,
      lastName: lastNameInput,
    }
    dispatchNameChange(nameObject);
  }

  return (
    <div>
      <h2>Change Name:</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          aria-label="Name"
          aria-describedby="button-addon2"
          value={firstNameInput}
          onChange={e => setFirstNameInput(e.target.value)}
        />
      </div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Last name"
          aria-label="Name"
          aria-describedby="button-addon2"
          value={lastNameInput}
          onChange={e => setLastNameInput(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={updateName}>Update</button>
    </div>
  );
}

// Set up the map functions
const mapStateToProps = (state) => ({
  firstName: state.userProfile.firstName,
  lastName: state.userProfile.lastName,
});

// The only way to dispatch actions is using the dispatch function
// If you don't use the dispatch function, the action will NEVER reach the reducer
const mapDispatchToProps = (dispatch) => ({
  dispatchNameChange: (nameObject) => dispatch(changeName(nameObject)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NameChange);