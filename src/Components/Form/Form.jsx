import React, {useState, useEffect} from 'react'






export default function Form(){
    

    const [meme, setMeme] = useState({topText:'', bottomText:'', randomImage:'http://i.imgflip.com/1bij.jpg' })

    const [allMemes, setAllMemes] = useState()

    // Fetch request inside a useEffect 

    useEffect(() => {
        async function getMemes(){
           const res = await fetch("https://api.imgflip.com/get_memes")
           const data = await res.json()
           setAllMemes(data)
        }
        getMemes()
    }, [])

   
    // Function to get a random meme image from the memesData file

    function getMemeImage() {
        
        const memesArray = allMemes.data.memes

        
        const randomNum = Math.floor(Math.random() * memesArray.length)

        const url = memesArray[randomNum].url

        setMeme(prevMeme => 
            ({
               ...prevMeme,
                randomImage: url
            })
            
        
        )

       

    }

    // Function to handle the changes to text inputs

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