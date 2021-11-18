import styled from "styled-components"
import { Avatar,Button,IconButton } from '@mui/material'
import {Chat,MoreVert,Search} from '@mui/icons-material'
import * as EmailValidator from "email-validator"
const Sidebar = () => {
    const CreateChat =()=>{
        const input=prompt('Please enter an email address you wish to chat with');

        if(!input) return null;

        if(EmailValidator.validate(input)){
            
        } 
    }
    return (
        <Container>
            <Header>
            <UserAvatar/>

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
