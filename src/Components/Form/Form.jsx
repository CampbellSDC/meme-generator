import React from 'react'
import data from '../../memesData'

export default function Form(){
    const FindMeme = () => {
        const randomMeme = data.data.memes
        
        const randomNum = Math.floor(Math.random() * randomMeme.length) 
        console.log(randomNum)
        // Below, create the logic to select a random meme using the above random number generator
        // randomMeme.map(item => {

        // })
    }

    
    
    
    
    return(
        <main>
            <div  className="form-container">

                <input type="text" placeholder="Top text" className="form--input" />
                <input type="text" placeholder="Bottom text" className="form--input" />
                <button onClick={FindMeme} className="form--btn">Get a new meme image 🖼</button>
            </div>

        </main>

    )
}