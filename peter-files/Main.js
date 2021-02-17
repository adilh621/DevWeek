import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Main = () => {

    const colors = {
        neutral: 'silver',
        happy: '#a2ccb6',
        sad: '#fceeb5',
        mad: '#ee786e',
        depress: 'orange',
    }

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [color, setColor] = useState(colors.neutral)

    useEffect(
        () => {
            document.body.style.background = color
        },
        [color]
    )


    // function changeBackground(mood) {
    //     console.log("my mood is", mood)
    //     document.getElementById('app').style.backgroundImage = "url('./img/mad.jpg')"
    // }


    return (


        <div>

            <input placeholder={"username"} type="text" onChange={(event) => { setName(event.target.value) }} />

            {/* <select onChange={(event)=>{setRoom(event.target.value)}}> */}
            <button

                onChange={(event) => {
                    setColor(event.target.value)
                }}

                onClick={(event) => {
                    setRoom(event.target.value)
                    // changeBackground(event.target.value)
                }}


                value="happy">happy</button>

            <button onClick={(event) => {
                setRoom(event.target.value)
                setColor(event.target.value)
            }} value="sad">sad</button>

            <button onClick={(event) => {
                setRoom(event.target.value)
                setColor(event.target.value)
            }} value="mad">mad</button>
            <button onClick={(event) => {
                setRoom(event.target.value)
                setColor(event.target.value)
            }} value="depress">depress</button>
            {/* </select> */}

            <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                <button type='submit'>join into app</button>
            </Link>


            {/* this part should be integrated inside each button */}
            <select value={color} onChange={e => setColor(e.target.value)}>
                {Object.entries(colors).map(([name, value]) => (
                    <option key={`color--${name}`} value={value}>
                        {name}
                    </option>
                ))}
            </select>



        </div>
    )
}

export default Main