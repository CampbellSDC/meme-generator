import React from 'react'
import data from '../../memesData'





export default function Form(){
    const [memeImage, setMemeImage] = React.useState('')

   function getMemeImage() {
        
        const meme = data.data.memes
        
        const randomNum = Math.floor(Math.random() * meme.length) 

        setMemeImage(meme[randomNum].url)
        
        }

    

    
    
    
    
    return(
        <main>
            <div  className="form-container">

                <input type="text" placeholder="Top text" className="form--input" />
                <input type="text" placeholder="Bottom text" className="form--input" />
                <button onClick={getMemeImage} className="form--btn">Get a new meme image 🖼</button>
            </div>
            <div className="meme">
            <img className="meme-image" src={memeImage} />

            </div>
            
                       

        </main>

    )
}