function UserStatus({ isLoggedIn }) {
  if (isLoggedIn === true) {
    return <p>Welcome back!</p>;
  } else if (isLoggedIn === false) {
    return <p>Please log in!</p>;
  }
}

export default UserStatus;
