function Profile({ user, handleLogout }) {
    return (
      <div>
        <h2>Welcome, {user?.name}!</h2> <p>IP: {user?.ip}</p>
        <p>Username: {user?.username}</p>
        <p>Email: {user?.email}</p>
        <p>BirthDate: {user?.birthDate}</p>
        <button onClick={handleLogout}>Log Out</button>
      </div>
    );
  }
  
  export default Profile;