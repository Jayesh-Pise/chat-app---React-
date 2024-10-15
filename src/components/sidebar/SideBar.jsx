import React from 'react'
import Header from './header'
import { Box } from '@mui/material'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

function sidebar() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <Box sx={{ width: "25vw", display: "flex", flexDirection: "column", height: "100" }}>

            <Header />

            <Tabs 
                value={value} 
                onChange={handleChange} 
                aria-label="basic tabs example"
                variant='fullWidth'>

                <Tab icon={<ChatBubbleOutlineIcon/>} iconPosition='start' label="Chat List" sx={{minHeight: "inherit"}} />
                <Tab icon={<PersonIcon/>} iconPosition='start' label="User List" sx={{minHeight: "inherit"}} />
            </Tabs>

            {value === 0 && (
                    <List sx={{p:0, overflowY:"auto"}} >

                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar alt="Shilpa Shetty" src="/static/images/avatar/1.jpg" />
                      </ListItemAvatar>
                      <ListItemText
                        primary="Shilpa Shetty"
                        secondary={
          
                            <Typography
                              component="span"
                              variant="caption"
                              sx={{ color: 'text.primary', display: 'inline' }}
                            >
                              Lorem ipsum dolor sit amet consectetur.....
                            </Typography>
                        }
                      />

                    </ListItem>

                    <Divider variant="inset" component="li" />


                </List>
            )}

        </Box>

    )
}

export default sidebar