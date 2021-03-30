import React, { useState, useEffect, useMemo, useRef, memo, FC } from 'react';
import { Route, Switch, NavLink, Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { useSelector, useDispatch } from 'react-redux';
import { action } from '../../redux/actions/action';
// import Media from '../../media';
import './container1.scss';
import {  getFilm, graphqlRequest } from '../../Requests/AxiosPost';
import 'react-scroll';
//types
import {  Redux } from '../../types/types';
import { useQuery } from '@apollo/client';
import { post } from '../../Requests/FetchPost';
let Container1:FC = () => {
    
    const dispatch = useDispatch();
    const [loading, setloading] = useState<boolean>(false);
    useEffect(():void => {

    }, []);

    const [state, setState] = useState('');
    const arr = useSelector((state:Redux) => state.Reducer.arr);
    const [data, setdata] = useState<any>([]);
    const click =async ():Promise<void> => {
        let x = await getFilm(3)
        console.log(x)
        let data =await graphqlRequest(3)
        console.log(data)
    }
    if(loading){
        return (
            <div>
                loading
            </div>
        )
    }
    return (
        <>
            <section className='container1'>
                <button onClick={click}>click</button>
                {data.map((elem:any,i:number):JSX.Element => {
                    return (
                        <div key={elem.id}>
                            <p>{elem.name}</p>
                        </div>
                    )
                })}
            </section>
        </>
    )
}

export default Container1 = memo(Container1);

        