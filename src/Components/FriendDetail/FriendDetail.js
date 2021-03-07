import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    let {friendId} = useParams();
    const [friend, setFriend] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch (url)
        .then(res => res.json())
        .then(data => setFriend(data))            
    }, [])
    
        const {name, phone, website } = friend;
      
    // const companyName = company.name;
    // const companyBs = company.bs;
    // const companyCatChPhrase = company.catchPhrase;        
    return (
        <div>
           <h1> This is FriendDetail  {friendId}</h1>
           <h3>Friend Name : {name}</h3>
           <p> Phone Number : {phone}</p>
           <p> Website: {website}</p>
            
          

        </div>
    );
};

export default FriendDetail;