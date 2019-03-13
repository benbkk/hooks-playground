import React from 'react'
import { Global } from '@emotion/core'
import { AppCss, AppHeaderCss } from 'css/AppCss';
import {Styles } from 'css/StylesCss'
import Login from './Login'
import Register from './Register'


const App = ({ login }) => (
  <>
  <Global styles={Styles} />
  <AppCss className='App'>
    <AppHeaderCss className='App-header'>
      {!login
        ? <Login />
        : <Register />
      }
    </AppHeaderCss>
  </AppCss>
</>
)

export default App;