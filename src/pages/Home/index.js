import React, {useEffect, useState} from 'react';
import GardenContainer from '../../components/garden/index.js';
import DefaultSpinner from '../../components/modals/spinner/default-spinner.js';
import client from '../../services/client.js';
import {toast} from 'material-react-toastify';
import history from '../../services/history.js';


export default function Garden() {

    const [loaded, setLoaded] = useState(false);
    const [id, setID] = useState("");
    const [nickname, setNickname] = useState("loading...");
    const [fruits, setFruits] = useState([]);
    const [animals, setAnimals] = useState([]);
    const [flowers, setFlowers] = useState([]);
    const [decorations, setDecorations] = useState([]);
    const [players, setPlayers] = useState(0);
    const [sat, setSat] = useState(false);

    useEffect(() => {
        const loadEventSource = async () => {
        if (!loaded) {
        
        // Check if user is logged in
        try {
        const data = await client.get('/auth/checkSession', {});
        setID(data.data?.stack.id);
        setNickname(data.data?.stack.nickname);
        } catch (error) {
            setLoaded(true);
            return history.push('/login');
        }

        const events = new EventSource(`${process.env.REACT_APP_BACKEND_URL}/api/v1/listen/`
        , {withCredentials: true});

        events.onmessage = event => {

        const receivedData = JSON.parse(event.data);
        switch (receivedData.eventType) {
          case "handshake":
            handleHandshake(receivedData.data);
            break;
          case "update":
            handleUpdate(receivedData.data);
            break;
          case "delete":
            console.log("UPDATE >>>>>> " + receivedData.data);
            break;
          default:
            break;
        }
      };
      setLoaded(true);
    }
    }
    loadEventSource();
    }, [loaded]);

    // Receives data from components
    const parentListener = async function(data) {
      try {
        await client.post('/update', data);
      } catch (error) {
        toast.error(error.response?.data?.message);
      }
    };

    const handleUpdate = (updateData) => {

    }    
    const handleHandshake = (handshakeData) => {
        if (handshakeData.fruits) {
          setFruits(handshakeData.fruits);
        } 
        if (handshakeData.flowers) {
          setFlowers(handshakeData.flowers);
        }
        if (handshakeData.animals) {
          setAnimals(handshakeData.animals);
        } 
        if (handshakeData.decorations) {
          setDecorations(handshakeData.decorations);
        }
        if (handshakeData.playersOnline) {
          setPlayers(handshakeData.playersOnline);
        }
    }

    return (
        <>
            <GardenContainer 
            listener={parentListener}
            nickname={nickname}
            fruits={fruits}
            flowers={flowers}
            animals={animals}
            decorations={decorations}
            online={players}
            />
            {<DefaultSpinner hasLoaded={loaded}/>
            }

        </>
    );
};