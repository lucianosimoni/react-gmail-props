import { useState } from 'react'

import initialEmails from './data/emails'
import Header from './Header'
import LeftMenu from './LeftMenu'
import Emails from './Emails'

import './styles/app.css'

const getReadEmails = emails => emails.filter(email => !email.read)

const getStarredEmails = emails => emails.filter(email => email.starred)

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')

 

  const toggleStar = targetEmail => {
    const updatedEmails = emails =>
      emails.map(email =>
        email.id === targetEmail.id
          ? { ...email, starred: !email.starred }
          : email
      )
    setEmails(updatedEmails)
  }

  const toggleRead = targetEmail => {
    const updatedEmails = emails =>
      emails.map(email =>
        email.id === targetEmail.id ? { ...email, read: !email.read } : email
      )
    setEmails(updatedEmails)
  }

  // Condition
  let filteredEmails = emails

  if (hideRead) filteredEmails = getReadEmails(filteredEmails)

  if (currentTab === 'starred') {
    filteredEmails = getStarredEmails(filteredEmails)
  }
  // End of Condition


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
      
      <Emails />
    </div>
  )
}

export default App
