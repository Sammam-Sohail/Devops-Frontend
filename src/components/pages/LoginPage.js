import { Link, useHistory} from 'react-router-dom'
import { useState } from 'react'
import React from 'react'
import '../../App.css'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';

export default function LoginPage() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const api = `https://devopsprojectbackend.azurewebsites.net/login/`
    const [apiRes, setApiRes] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory();
    

    const handleLogin = async () => {

        setLoading(true)
        setApiRes('')

        await axios.post(api + username,{password}, { headers : {'Access-Control-Allow-Origin': '*'}}).
        then((res) => {
            const id = res.data.split(' ')[1]
            history.push('/Home?id=' + id);
        })
        .catch((e) => {
           setApiRes(e.response.status === 400 ? "Invalid password" : e.response.status === 404 ? "User not found" : null)
        })

        setLoading(false)

    }


    return (

        
         <div style={{textAlign: 'center'}}>
            
            { apiRes !== '' ?     
            <Modal show={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Login Failed</Modal.Title>
                </Modal.Header>
                <Modal.Body>{apiRes}</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => setApiRes('')}>
                    Close
                    </Button>
                </Modal.Footer>
            </Modal>
                : null}

            <div style={{backgroundColor: '#E0E0E0', marginTop: '100px', display: 'inline-block', borderRadius: 15, padding: 20}}>
                <p>
                    <label style={{float: 'left'}}>Username</label><br/>
                    <input type="text" onChange={(e) => setUsername(e.target.value)} required />
                </p>
                <p>
                    <label style={{float: 'left'}}>Password</label>
                    <br/>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} required />
                </p>
                
                <p >
                {loading === true ? <Spinner animation="border"/> : 
                    <button id="sub_btn" type="submit" style={{display: 'block', margin: '0 auto', maxWidth: '100px'}} onClick={handleLogin}>Login</button>
                }
                </p>
            </div>
            <footer style={{textAlign: 'center', marginTop: 15}}>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>

    );
}
