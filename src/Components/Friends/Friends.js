import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Friends.css';

const Friends = (props) => {
    // console.log(props);
    const { name, email, id} = props.friends;
    const history = useHistory();
    const handleClick =(friendId) => {
        const url = `/friend/${friendId}`;
        history.push(url)
    }
    return (
        <div className="friends-Div">
            <h1> Friend Name : {name}</h1>
            <h1> Friend Email : {email}</h1>
            <p> ID : <Link to={`/friend/${id}`}>Friend Details of {id}</Link></p>
            <button onClick={() =>  handleClick(id)}>Show detail</button>
        </div>
    );
};

export default Friends;