import { useState } from "react";
import axios from "axios";

const projectID = 'a62a0154-46fd-4080-8942-bc9c42116802';


const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password }

        try {
            
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
            setError('');
        } catch (error) {
            setError('Incorrect Credentials');
        }
    };

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <div className="test-info">
                <h4 className="test-app">To test the app please log in as:</h4>
                    <ul className="guest-cred">
                        <li>Username: Guest</li>
                        <li>Password: 123123</li>
                    </ul>
                </div>
                    <form onSubmit={handleSubmit}>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username"/>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password"/>
                        <div align="center">
                            <button type="submit" className="button">
                                <span>Start Chatting</span>
                            </button>
                        </div>
                    </form>
                    <h2 className="error">{error}</h2>
            </div>
        </div>
    )
}

export default LoginForm;