import UserBadge from './UserBadge';
import UserTable from './UserTable';
import NameChange from './NameChange';

const UserProfile = (props) => {
  return (
    <div>
      <h2>User Profile</h2>
      <div className="row">
        <div className="col-4">
          <UserBadge />
        </div>
        <div className="col-8">
          <UserTable />
          <NameChange />
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
