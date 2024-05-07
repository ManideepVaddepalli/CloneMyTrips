import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Page from './pages/Page'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="742176195552-snfusug219agik0m9mbd002190tq567v.apps.googleusercontent.com">
      <h3 className='clonemytrips'>CloneMyTrips</h3>
      <div className='card-container'>
          <div className='auth-container'>
            <Page>
            </Page>
          </div>
      </div>
    </GoogleOAuthProvider>
  </React.StrictMode>
)
