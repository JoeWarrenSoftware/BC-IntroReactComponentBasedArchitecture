import React from 'react';
import './BusinessCard.css';
//import customImage from "https://i.pravatar.cc/150?u=fake@pravatar.com";
// Dynamically import all images in the assets folder
//const images = import.meta.glob("./assets/images/*.jpg"); function App()
//{ return ( <div className="App"> {imageData.map((item) => ( <div key={item.id}> <h2>{item.title}</h2> <img src={images[`./${item.imageUrl}`]} alt={item.title} /> </div> ))} </div> ); }

function BusinessCard({contact}) {

  const {name, position, email, phone, website, image} = contact;

  const im = new URL(`${image}`, import.meta.url).href

  console.log(`Image is ${image}`)

  return (
    <div className="business-card">
      <div className="photo-placeholder">
        <img src={im}></img>
      </div>
      <div className="contact-info">
        <h2>{name}</h2>
        <p>Position: {position}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Website: {website}</p>
      </div>
    </div>
  );
}

export default BusinessCard;
