import React from 'react';
import { useEffect, useState } from 'react';
import Friends from '../Friends/Friends';


function Home() {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/users";
        fetch(url)
            .then(res => res.json())
            .then(data => setFriends(data));
    }, []);
    return (
        <div>
            <h1>Friends: {friends.length}</h1>
            {friends.map((friend, id) => <Friends friends={friend} key={id}></Friends>)}
        </div>
    );
}

export default Home;