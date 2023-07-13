import React from 'react'

export default function Form(){
    return(
        <main>
            <form  className="form-container">

                <input type="text" placeholder="top text" className="form--input" />
                <input type="text" placeholder="bottom text" className="form--input" />
                <button className="form--btn">Get a new meme image 🖼</button>
            </form>

        </main>

    )
}