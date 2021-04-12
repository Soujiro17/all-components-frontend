import React, { useContext, useState } from 'react';
import axiosInstance from '../../services/axios';
import M from 'materialize-css';

import { FormControl, InputLabel, Input, Button, IconButton, InputAdornment } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons';
import AuthContext from '../../components/authcontext/AuthContext';
import { useHistory } from 'react-router';

export default function Admin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const { getLoggedIn } = useContext(AuthContext);

    const history = useHistory();

    const handleLogin = async () => {
        try{ 

            await axiosInstance.post('auth/login', {email, password})
                .then(async (res) => {
                    
                    await getLoggedIn();
                    M.toast({html: "Logged in", classes: "green", displayLength: 1500})

                    history.push("/dashboard")

                })
        }
        catch(err) { M.toast({html: "Error logging in", classes: "red", displayLength: 1500}) }
    }

    return (
        <div className = "container-main" style = {{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <FormControl>
                <InputLabel htmlFor="standard-adornment-email">Email</InputLabel>
                <Input
                    id="standard-adornment-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                <Input
                    id="standard-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(showPassword? false : true)}
                        >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                    }
                />
            </FormControl>
            <Button type = "submit" onClick = {handleLogin}>Log in</Button>
        </div>
    )
}
