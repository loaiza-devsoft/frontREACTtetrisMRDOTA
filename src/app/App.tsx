import React from 'react'
import Router from './Router'
import "./app.css"
import { GoogleOAuthProvider } from '@react-oauth/google'

export default function App() {
  return (
    <GoogleOAuthProvider clientId='157248408373-i7kgglkl62u4ijhqct2545r7gb0ri4i9.apps.googleusercontent.com'>
      <Router />
    </GoogleOAuthProvider>

  )
}
