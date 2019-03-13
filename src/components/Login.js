import React, { useState } from "react";
import { Button } from 'getlinks-ui'
import Input from 'css/InputCss'

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const handleSubmit = event => {
    event.preventDefault();
    const userData = {
      username,
      password
    };
    setUser(userData);
    setUsername("");
    setPassword("");
  };

  return (
    <>
      <form
        onSubmit={event => handleSubmit(event)}
        style={{padding: '18px', width: '33%', margin: 'auto', maxWidth: '480px'}}
      >
        <h1>Login</h1>
        <Input
          id='username'
          type="text"
          name="username"
          placeholder="username"
          onChange={event => setUsername(event.target.value)}
          value={username}
        />
        <Input
          id='password'
          type="password"
          name="password"
          placeholder="password"
          onChange={event => setPassword(event.target.value)}
          value={password}
          label={false}
          style={{height: 'auto',  marginBottom: '18px', fontSize: 'inherit', boxSizing: 'border-box'}}
        />
        <Button size="lg" type="submit" block>Submit</Button>
        {user &&
        <>
          <pre style={{marginTop: '18px'}}><code>{JSON.stringify(user, null, 2)}</code></pre>
          <pre><code>{console.log(username)}</code></pre>
        </>  
        }
      </form>
      
    </>
  );
}
