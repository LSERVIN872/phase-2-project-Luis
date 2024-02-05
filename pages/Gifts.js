import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';

function Gifts() {
    const { id } = useParams();
    const [gift, setGift] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:4000//${id}`)
          .then((response) => response.json())
          .then((data) => {
            setGift(data);
          })
          .catch((error) => console.error('Error Creating Gift:', error));
      }, [id]);
    
      if (!gift) {
        return <div>Loading...</div>;
      }
    
      return (
        <div>
          <header><NavBar/>
          </header>
          <h1>{gift.item}</h1>
          <p>Price: {gift.price} dollars</p>
          <p>Message: {gift.message}</p>
        </div>
      );
    }
    
    export default Gifts