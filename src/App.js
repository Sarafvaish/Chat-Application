import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';
import LoginForm from './components/LoginForm';

const App = ()=>{
    if(!localStorage.getItem('username')) return <LoginForm/>

    return(
        <ChatEngine
        height = "100vh"
        projectID = "83f4e443-83e2-42dd-810e-8b29674513da"
        userName = {localStorage.getItem('username')}
        userSecret = {localStorage.getItem('password')}
        renderChatFeed = {(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
        />
    );
}

export default App;

