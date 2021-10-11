import React, {useEffect, useState} from 'react';
import GardenContainer from '../../components/garden/index.js';
import DefaultSpinner from '../../components/modals/spinner/default-spinner.js';
import client from '../../services/client.js';
// import history from '../../services/history.js';


export default function Garden() {

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const loadEventSource = async () => {
        if (!loaded) {
        
        // Check if user is logged in
        try {
        await client.get('/auth/checkSession', {});
        } catch (error) {
            setLoaded(true);
            // return history.push('/login');
        }

        const events = new EventSource(`${process.env.REACT_APP_BACKEND_URL}/api/v1/listen/`
        , {withCredentials: true});

        events.onmessage = event => {

        const receivedData = JSON.parse(event.data);

        // Will be implemented in the future
        switch (receivedData.eventType) {
          case "handshake":
            console.log("HANDSHAKE >>>>>> " + receivedData.handshakeData);
            break;
          case "update":
            console.log("UPDATE >>>>>> " + receivedData.updateData);
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

    const parentListener = function(data) {
      // Receive data from components
    };


    

    return (
        <>
            <GardenContainer listener={parentListener} />
            {<DefaultSpinner hasLoaded={loaded}/>
            }

        </>
    );
};