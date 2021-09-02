import { useEffect, useState } from 'react';
import { getUsers } from './api';
import { Link } from 'react-router-dom';

const Users = (props) => {
  const { setUser } = props;
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  const changeUser = (event) => {
    const newUser = event.target.value;
    setUser({ username: newUser });
  };

  return (
    <div id="users">
      <div className="container">
        <h2>Select a User</h2>
        <p>
          Because this is a demo site built for my portfolio I have included
          some funtionality to allow you to select which user you would like to
          be. Simply choose from the list below.
        </p>

        <div className="user-grid">
          {users.map((user) => {
            return (
              <div className="user-card" key={user.username}>
                <i className="far fa-user fa-6x" />
                <div className="user-select">
                  <h2>{user.username}</h2>
                  <Link to="/articles/">
                    <button
                      value={user.username}
                      type="submit"
                      onClick={changeUser}
                      className="btn btn-primary"
                    >
                      Select User
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Users;
