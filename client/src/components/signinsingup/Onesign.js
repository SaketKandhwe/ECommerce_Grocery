import React, { useState } from 'react';

const Onesign = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the password and confirm password.
    if (password !== confirmPassword) {
      // Display an error message.
      alert('Password and confirm password do not match.');
      return;
    }

    // Submit the form to the server.
    // ...
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(event) => setConfirmPassword(event.target.value)}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Onesign;