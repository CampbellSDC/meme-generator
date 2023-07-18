import React from 'react'
import data from '../../memesData'





export default function Form(){
    

    const [meme, setMeme] = React.useState({topText:'', bottomText:'', randomImage:'http://i.imgflip.com/1bij.jpg' })

    const [allMemeImages, setAllMemeImages] = React.useState(data)

   
    function getMemeImage() {
        
        const memesArray = allMemeImages.data.memes

        
        const randomNum = Math.floor(Math.random() * memesArray.length)

        const url = memesArray[randomNum].url

        setMeme(prevMeme => 
            ({
               ...prevMeme,
                randomImage: url
            })
            
        
        )

       

    }

    
    return(
        <main>
            <div  className="form-container">

                <input type="text" placeholder="Top text" className="form--input" />
                <input type="text" placeholder="Bottom text" className="form--input" />
                <button onClick={getMemeImage} className="form--btn">Get a new meme image 🖼</button>
            </div>
            <div className="meme">
            <img className="meme-image" src={meme.randomImage} />

            </div>
            
                       

        </main>

    )
}