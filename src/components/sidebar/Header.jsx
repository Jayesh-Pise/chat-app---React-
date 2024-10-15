import React from 'react'
import { Avatar, Card, CardHeader, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';


function header() {
    return (

        <div>
             
            <Card sx={{bgcolor: "primary.light", borderRadius: 0, color: "primary.contrastText"}}>
                <CardHeader
                    avatar={<Avatar>J</Avatar>}
                    title="Jayesh Pise"
                    action={
                        <IconButton aria-label="settings" sx={{color:"primary.contrastText"}}>
                          <MoreVertIcon />
                        </IconButton>}
                    subheader={
                        <Typography variant='caption'></Typography>
                    }/>
                </Card>
        </div>
    )
}

export default header