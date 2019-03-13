import React, { useState } from "react";
import { Button } from 'getlinks-ui'
import Input from 'css/InputCss'

const initialFormState = {
  username: "",
  email: "",
  password: ""
};

export default function Register(props) {
  const [form, setForm] = useState(initialFormState);
  const [user, setUser] = useState(null);

  const handleChange = event => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });

  };

  const handleSubmit = event => {
    event.preventDefault();
    setUser(user);
    console.log(setUser(form));
    setForm(initialFormState);
  };
  return (
    <>
      
      <form
        onSubmit={event => handleSubmit(event)}
        style={{padding: '18px', width: '33%', margin: 'auto', maxWidth: '480px'}}
      >
        <h1>Register</h1>
        <Input
          type="text"
          name="username"
          placeholder="username"
          onChange={handleChange}
          value={form.username}
          autoComplete="off"
        />
        <Input
          type="email"
          name="email"
          placeholder="email"
          onChange={handleChange}
          value={form.email}
          style={{height: 'auto',  marginBottom: '18px', fontSize: 'inherit', boxSizing: 'border-box'}}
        />
        <Input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
          value={form.password}
          style={{height: 'auto',  marginBottom: '18px', fontSize: 'inherit', boxSizing: 'border-box'}}
        />
        <Button block type="submit">Submit</Button>
        {user &&
          <pre style={{marginTop: '18px'}}><code>{JSON.stringify(user, null, 2)}</code></pre>
          }
      </form>
    </>
  );
}
