import React from 'react'

import { FormControl, InputLabel, Input } from '@material-ui/core'

export default function Admin() {
    return (
        <div className = "container-main" style = {{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <FormControl>
                <InputLabel htmlFor="email">Email address</InputLabel>
                <Input id="email" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input id="password" aria-describedby="help" />
            </FormControl>
        </div>
    )
}
