import React from 'react'
import {Avatar} from '@mui/material'
import styled from 'styled-components'
import getRecipientEmail from '../utils/getRecipientEmail'
import { useCollection } from 'react-firebase-hooks/firestore'
import {db,auth} from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import {useRouter} from 'next/router'
const ChatList = ({id,users}) => {
    const router=useRouter()
    const [user]=useAuthState(auth)
    const [recipientSnapshot]=useCollection(db.collection('users').where('email','==',getRecipientEmail(users,user)))
    
    const enterChat=()=>{
        router.push(`/chat/${id}`)
    }

    const recipient=recipientSnapshot?.docs?.[0]?.data();
    const recipientEmail= getRecipientEmail(users,user)
    return (
        <Container onClick={enterChat}>
            {recipient ? (
                <UserAvatar src={recipient?.photoURL}/>
            ):(
                <UserAvatar>{recipientEmail[0]}</UserAvatar>
            )}
            <p>{recipientEmail}</p>
        </Container>
    )
}

export default ChatList

const Container=styled.div`
   display:flex;
   align-items:center;
   padding: 15px;
   word-break:break-word;

   :hover{
       background-color:#e9eaeb;
   }
`;

const UserAvatar=styled(Avatar)`
    margin:5px;
    margin-right:5px;`
