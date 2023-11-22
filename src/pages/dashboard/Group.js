import React, { useState, useEffect } from 'react';

import {
  Box,
  Stack,
  Typography,
  IconButton,
  Link,
  Divider,
} from "@mui/material";
import { MagnifyingGlass, Plus } from "phosphor-react";
import { useTheme } from "@mui/material/styles";
import { SimpleBarStyle } from "../../components/Scrollbar";
import { ChatList } from "../../data";
import ChatElement from "../../components/ChatElement";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/Search";
import CreateGroup from "../../sections/Dashboard/CreateGroup";
import { TextField, Button, Paper, List, ListItem, ListItemText } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { socket } from '../../socket';

const Group = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  }
  const handleOpenDialog = () => {
    setOpenDialog(true);
  }
  const theme = useTheme();
  // GroupChat.js

const GroupChat = () => {
  const userId = window.localStorage.getItem("user_id");

  const groupId ='wgwu4as';
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const sendMessage = () => {
    if (socket && inputMessage.trim() !== '') {
      socket.emit('sendMessage', groupId, inputMessage, null, userId);
      setInputMessage('');
    }
  };
  useEffect(() => {
    // Set up event listeners for socket.io
    
    if (socket) {
      // socket.emit('createGroup', 'name','picname');
      // Receive new messages
     
      socket.on('receiveMessage', (data) => {
        console.log(data,'receiveMessage')
        setMessages((prevMessages) => [...prevMessages, data]);
      });
     
      // Connect to the group on component mount
      // socket.emit('joinGroup', groupId,userId);

      // Clean up event listeners on component unmount
      return () => {
        socket.off('new_group_message');
      };
    }

  }, [socket, groupId]);
useEffect(()=>{
   
  if (socket) {
    socket.on('new_group_message', (data) => {
      console.log(data,'new_group_message')
      setMessages((prevMessages) => [...prevMessages, data.message]);
    });
  socket.emit("get_group_messages", { groupId }, (data) => {
    // data => list of messages
    console.log(data, "List of messages");
    setMessages((prevMessages) => [...prevMessages,   ...data ]);
  });
  }
},[socket])

  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <Paper elevation={3} style={{ flex: 1, overflowY: 'auto' }}>
        <List>
          {messages.map((message, index) => (
            <ListItem key={index}>
              <ListItemText primary={message.text} secondary={message.username} />
            </ListItem>
          ))}
        </List>
      </Paper>
      <Box p={2}>
        <TextField
          fullWidth
          variant="outlined"
          label="Type your message"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={sendMessage} style={{ marginTop: '8px' }}>
          Send
        </Button>
      </Box>
    </Box>
  );
};

  return (
    <>
    <GroupChat/>
      <Stack direction="row" sx={{ width: "100%" }}>
        {/* Left */}

        <Box
          sx={{
            overflowY: "scroll",
            height: "100vh",
            width: 320,
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background,
            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Stack p={3} spacing={2} sx={{ maxHeight: "100vh" }}>
            <Stack
              alignItems={"center"}
              justifyContent="space-between"
              direction="row"
            >
              <Typography variant="h5">Groups</Typography>
            </Stack>
            <Stack sx={{ width: "100%" }}>
              <Search>
                <SearchIconWrapper>
                  <MagnifyingGlass color="#709CE6" />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Stack>
            <Stack
              justifyContent={"space-between"}
              alignItems={"center"}
              direction={"row"}
            >
              <Typography variant="subtitle2" sx={{}} component={Link}>
                Create New Group
              </Typography>
              <IconButton onClick={handleOpenDialog}>
                <Plus style={{ color: theme.palette.primary.main }} />
              </IconButton>
            </Stack>
            <Divider />
            <Stack sx={{ flexGrow: 1, overflow: "scroll", height: "100%" }}>
              <SimpleBarStyle timeout={500} clickOnTrack={false}>
                <Stack spacing={2.4}>
                  <Typography variant="subtitle2" sx={{ color: "#676667" }}>
                    Pinned
                  </Typography>
                  {/* Chat List */}
                  {ChatList.filter((el) => el.pinned).map((el, idx) => {
                    return <ChatElement {...el} />;
                  })}
                  <Typography variant="subtitle2" sx={{ color: "#676667" }}>
                    All Chats
                  </Typography>
                  {/* Chat List */}
                  {ChatList.filter((el) => !el.pinned).map((el, idx) => {
                    return <ChatElement {...el} />;
                  })}
                </Stack>
              </SimpleBarStyle>
            </Stack>
          </Stack>
        </Box>

        {/* Right */}
      </Stack>
      {openDialog && <CreateGroup open={openDialog} handleClose={handleCloseDialog} />}
    </>
  );
};

export default Group;
