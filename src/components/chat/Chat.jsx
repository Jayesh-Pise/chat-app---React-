import React from 'react'
import { Paper } from '@mui/material'
import SideBar from '../sidebar/sidebar'
import ChatBox from './chatBox';

function chat() {
  return (
    <>
      <Paper square elevation={0} sx={{ height: "100vh", display: "flex" }}>
        <SideBar />
        <ChatBox/>
      </Paper>
    </>
  )
}

export default chat


