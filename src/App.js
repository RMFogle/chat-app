import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css'

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="a62a0154-46fd-4080-8942-bc9c42116802"
            userName="RyanFogle"
            userSecret="1234321"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App;