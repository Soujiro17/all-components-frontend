import { Button } from '@material-ui/core'
import React, { useContext } from 'react'
import { useHistory } from 'react-router';
import axiosInstance from '../../services/axios'
import AuthContext from '../authcontext/AuthContext'

export default function LogoutButton() {

    const { getLoggedIn } = useContext(AuthContext);

    const history = useHistory()

    const logout = async () => {

        try{
            await axiosInstance.get('auth/logout');
            await getLoggedIn();
            history.push("/")
        }catch(err){
            console.log(err);
        }
    }

    return (
        <div>
            <Button onClick = {logout}>Logout</Button>
        </div>
    )
}
