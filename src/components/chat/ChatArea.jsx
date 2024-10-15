import { Avatar, Box, Chip, List, ListItem, ListItemAvatar, ListItemText, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

function ChatArea() {
    const messages = useSelector((state) => state.chat.messages);

    return (
        <Box sx={{ overflowY: "auto", flex: "1 0 0", background: "#f9f9f9" }}>
            <Stack direction="row" justifyContent="center" sx={{ py: 2, position: "sticky", top: 0, zIndex: 2, background: "#f9f9f9 " }}>
                <Chip label="Today" />
            </Stack>

            <List sx={{ p: 0, overflowY: "auto", flex: "1 0 0" }}>

                {messages.map((msg) => (
                    <ListItem key={msg.id} sx={{ mb: 3, flexDirection: msg.sender === 'Jayesh Pise' ? 'row-reverse' : 'row' }}>
                        <Box sx={{ display: "flex", width: "80%", flexDirection: msg.sender === 'Jayesh Pise' ? 'row-reverse' : 'row' }}>
                            <ListItemAvatar>
                                <Avatar alt={msg.sender} src="/static/images/avatar/1.jpg" />
                            </ListItemAvatar>
                            <Paper sx={{ width: "100%", p: 1.5, bgcolor: msg.sender === 'Jayesh Pise' ? '#ccc' : 'white' }}>
                                <ListItemText
                                    sx={{ m: 0 }}
                                    primary={msg.sender}
                                    secondary={
                                        <Typography component="span" variant="caption" sx={{ color: 'text.primary', display: 'inline' }}>
                                            {msg.content}
                                        </Typography>
                                    }
                                />
                                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mt: 1 }}>
                                    <Typography variant="body1">{msg.timestamp}</Typography>
                                </Box>
                            </Paper>
                        </Box>
                    </ListItem>
                    
                ))}
            </List>
        </Box>
    );
}

export default ChatArea;
