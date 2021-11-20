import styled from "styled-components"
import { Avatar,Button,IconButton } from '@mui/material'
import {Chat,MoreVert,Search} from '@mui/icons-material'
import * as EmailValidator from "email-validator"
import { useAuthState } from "react-firebase-hooks/auth"
import {useCollection} from "react-firebase-hooks/firestore"
import {auth,db} from '../firebase'
import Chat from './Chat'
const Sidebar = () => {
    const[user]=useAuthState(auth)
    const userChatRef=db.collection('chats').where('users','array-contains',user.email);
    const [chatsSnapshot]=useCollection(userChatRef)
    const CreateChat =()=>{
        const input=prompt('Please enter an email address you wish to chat with');

        if(!input) return null;

        if(EmailValidator.validate(input)&&!chatAlreadyExists(input)&&input!==user.email ){
            db.collection('chats').add({
                users:[user.email, input],
            })
        } 
    }
    const chatAlreadyExists=(recipientEmail)=>{
        !!chatsSnapshot?.docs.find((chat)=>chat.data().users.find((user)=>user===recipientEmail)?.length>0)
    }
    return (
        <Container>
            <Header>
            <UserAvatar onClick={()=>auth.signOut()}/>

            <IconsContainer>
                <IconButton>
                <Chat/>
                </IconButton>
                <IconButton>
                <MoreVert/>
                </IconButton>
            </IconsContainer>
            </Header>

            <SearchContainer>
                <Search/>
                <SearchInput placeholder="Search in Chat"/>
            </SearchContainer>

            <SidebarButton onClick={createChat}>Start a New Chat</SidebarButton>
            {chatsSnapshot?.doc.map(chat=>(
                <Chat key={chat.id} id={chat.id} user={chat.data().users}/>
            ))}
        </Container>
    )
}

export default Sidebar

const Container=styled.div``;

const Header=styled.div`
    display:flex;
    position:sticky;
    top:0;
    background-color:white;
    z-index:1;
    justify-content:space-between;
    align-items:center;
    padding:15px;
    height:80px;
    border-bottom:1px solid whitesmoke;
` 
const SearchContainer=styled.div`
    display:flex;
    align-items:center;
    padding:5px;
    border-radius:2px;`

const SearchInput=styled.input`
    outline-width:0;
    border:none;
    flex:1;`

const SidebarButton=styled(Button)`
    width:100%;
    &&&{
        border-top: 1px solid whitesmoke;
        border-bottom: 1px solid whitesmoke;
    }
    `
const UserAvatar=styled(Avatar)`
     cursor:pointer;
     
     :hover{
         opacity:0.8
     }`;

const IconsContainer=styled.div``