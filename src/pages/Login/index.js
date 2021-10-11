import { Container } from "react-bootstrap";
import client from '../../services/client.js';
import {toast} from 'material-react-toastify';
import history from "../../services/history.js";
import { useEffect } from "react";

export default function Login() {

    const handleSubmit = (event) => {
       event.preventDefault();
       const getData = async () => {
       try {
       await client.post('/auth/login', {
           nickname: event.target.nickname.value
       });
       toast.success("Successfully logged in!");
       history.push('/');
       } catch (error) {
           toast.error(error.message);
       }
       }
       getData();
    };

    useEffect(() => {
        (async () => {
            try {
            const data = await client.get('/auth/checkSession');
            if (data.status === 200) {
                history.push('/');
            }
            } catch (error) {
                //Stay
            }
        })();
    });

    return (
        <Container>
            <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            name="nickname" 
            label="nickname" 
            placeholder="Your nickname"
            required/>
            <button type="submit">Login</button>
            </form>
        </Container>
    );
}