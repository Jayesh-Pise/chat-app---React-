import { Box, Button } from '@mui/material'
import React from 'react'
import { Avatar, Card, CardHeader, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import CallIcon from '@mui/icons-material/Call';
import ChatArea from './ChatArea';
import Footer from './Footer';

function chatBox() {
    return (
        <div>
            <Box sx={{ width: "75vw", height: "100%", display: "flex", flexDirection: "column" }}>

                <Card sx={{ borderRadius: 0 }} elevation={0}>
                    <CardHeader
                        avatar={
                            <>
                                <Button sx={{minWidth: "auto", mr:1 }}>
                                    <ArrowBackIcon />
                                </Button>

                                <Avatar>S</Avatar>
                            </>
                        }
                        title="Shilpa Shetty"
                        action={
                            <>
                                <IconButton >
                                    <VideoCallIcon />
                                </IconButton>

                                <IconButton >
                                    <CallIcon />
                                </IconButton>
                            </>
                        }

                        subheader={
                            <Typography variant='caption'>online</Typography>} />
                </Card>

                <ChatArea/>
                <Footer/>

            </Box>
        </div>
    )
}

export default chatBox