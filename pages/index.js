import { useState } from 'react';
import LoginForm from '../components/LoginForm.js'
import CookieStandAdmin from '../components/CookieStandAdmin.js'

export default function Home() {

  const [isUser, setIsUser] = useState(false)
  function handleLogin(username, password) {
    setIsUser(true);
  }

  return (
  <>
    {
      isUser ?<CookieStandAdmin/> : <LoginForm onLogin={handleLogin}/>
    }
  </>
  )
}