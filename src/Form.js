import React, { useState } from "react";
import memedata from "./memesdata.js"


export default function Form(event){

    // event.addEventListener("onload", (e)=>{
    //    e.url
    // })


const  [ meme, setMeme] = useState({
    topText:"",
    bottomText:"",
    randomImage:"https://i.imgflip.com/emccr.jpg",
})
    

const [allMemeImages, setAllMemeImage] = useState(memedata)


 function handleClick(event){
    event.preventDefault();
const memesArray = memedata.data.memes
const randomNumber = Math.floor(Math.random() * memesArray.length);
const url  = memesArray[randomNumber].url
setMeme( prvestate => ({
    ...prvestate, 
    randomImage:url
}))
}
console.log(meme.randomImage)
    return(
        <div className="form">

<main>

  <form>

     <input className="input" type="text" />

     <input className="input" type="text" />

     <button onClick={handleClick} className="btn" > Get a new meme image 😀</button>

  </form>

  <div className="img-container">
       <img className="img" src={meme.randomImage}  alt="logo" /> 
 </div>

</main>

</div>

    )
}