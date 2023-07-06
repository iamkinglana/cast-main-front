import { useState } from 'react'
// import CastList from './components/CastList'
import Login from './components/Login'
import CommentList from './components/Comment'
import './App.css'
import UserSearch from './components/UserSearch'
import SignUp from './components/SignUp'
import CastList from './components/CastList'

function App() {
  return (
    <>
      <div>
        <Login />
        {/* <CommentList/> */}
        <CastList />
        <SignUp/>


        <UserSearch/>
      </div>
    </>
  )
}

export default App
