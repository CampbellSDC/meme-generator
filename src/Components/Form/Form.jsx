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

    function handleChange(event) {
        const {name, value} = event.target

        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    
    return(
        <main>
            <div  className="form-container">

                <input 
                type="text" 
                placeholder="Top text" 
                className="form--input"
                name="topText"
                value={meme.topText}
                onChange={handleChange}
                />

                <input 
                type="text" 
                placeholder="Bottom text" 
                className="form--input"
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
                />

                <button 
                    onClick={getMemeImage} 
                    className="form--btn">

                    Get a new meme image 🖼
                    
                </button>
                
            </div>
            <div className="meme">
            <img className="meme-image" src={meme.randomImage} />
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>

            </div>
            
                       

        </main>

    )
}