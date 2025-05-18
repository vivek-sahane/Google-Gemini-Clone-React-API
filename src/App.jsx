import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'

const App = () => {
  return (
    <>
      <Sidebar/>
      {/*in index.css file i have mentioned display-row that wht components are coming in row */}
      <Main/>
    </>
  )
}


export default App