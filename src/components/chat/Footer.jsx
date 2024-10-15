import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendMessage } from '../../store/reducers/chatSlice';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AddIcon from '@mui/icons-material/Add';

function Footer() {
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();

    const handleSendMessage = () => {
        if (message.trim()) {
            const newMessage = {
                id: Date.now(),
                content: message,
                sender: 'Jayesh Pise',
                timestamp: new Date().toLocaleTimeString(),
            };
            dispatch(sendMessage(newMessage));
            setMessage('');
            simulateIncomingMessage(); 
        }
    };

    const simulateIncomingMessage = () => {
        setTimeout(() => {
            const receivedMessage = {
                id: Date.now() + 1,
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, dicta.",
                sender: 'Shilpa Shetty',
                timestamp: new Date().toLocaleTimeString(),
            };
            dispatch(sendMessage(receivedMessage));
        }, 3000); 
    };


    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <Box sx={{ p: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
                <Button sx={{ minWidth: "auto", mr: 1 }}>
                    <MoreVertIcon />
                </Button>
                <Button sx={{ minWidth: "auto", mr: 1 }}>
                    <InsertEmoticonIcon />
                </Button>
                <Button sx={{ minWidth: "auto", mr: 1 }}>
                    <AddIcon />
                </Button>
            </Box>
            <Box sx={{ display: "flex", width: "80%" }}>
                <TextField
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder='Type a message'
                    size="small"
                    fullWidth
                    sx={{
                        "& .MuiInputBase-root": { borderRadius: 0, borderRight: 0 },
                    }}
                />
                <Button
                    variant="outlined"
                    sx={{ borderRadius: 0, width: "auto", height: "100%" }}
                    onClick={handleSendMessage}
                >
                    Send
                </Button>
                
            </Box>
        </Box>
    );
}

export default Footer;
