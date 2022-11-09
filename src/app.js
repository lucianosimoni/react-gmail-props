import { useState } from 'react'

import initialEmails from './data/emails'
import Header from './Header'
import LeftMenu from './LeftMenu'
import Emails from './Emails'

import './styles/app.css'



function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')


  return (
    <div className="app">
      <Header />
      
      {/* setCurrentTab currentTab setHideRead HideRead */}
      <LeftMenu 
        emails={emails}
        setCurrentTab={setCurrentTab}
        setHideRead={setHideRead}
        currentTab={currentTab}
        hideRead={hideRead}
      />
      
      <Emails 
        emails={emails}
        setEmails={setEmails}/>
    </div>
  )
}

export default App
