import React, { useState, useEffect } from 'react';
import { Route, Switch, NavLink, Link,Redirect } from 'react-router-dom';
import { action } from '../redux/actions/action';
import { useDispatch, useSelector } from 'react-redux';
//types
import { Redux } from '../types/types';

function Routs() {
    
    const dispatch = useDispatch()

    const redux = useSelector((state:Redux) => state.Reducer)

    return (
        <>
            {/* Route*? */}
            <Redirect to='/' />
        </>
    )
}
export default Routs