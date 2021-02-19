import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../style.css";

const Main = () => {

    const colors = {
        neutral: 'white',
        happy: '#FEFD97',
        sad: '#455566',
        mad: '#b80000',
        depress: '#35393d',
    }

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [color, setColor] = useState(colors.neutral)

    useEffect(
        () => {
            // document.body.style.background = color
            // document.body.style.background = `url("https://via.placeholder.com/500")` 
            document.body.style.background = `url("https://raw.githubusercontent.com/Piotr72us/piotr-portfolio/master/assets/images/${color}.jpg")` 
            
        },
        [color]
    )


    return (
        <>
            <div className="container-fluid jumboMargins">
                <div className="container text-center">
                    <h1 className="display-4">SPEAK UP</h1>
                    <p>A Messaging Platform
                        <br />
                        raising the awareness of cyberbullying
                    </p>
                    <hr />

                </div>
            </div>


            <div
                className="customMargins"
            >
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4 text-center">
                        <input placeholder={"Username"} type="text" onChange={(event) => { setName(event.target.value) }} />
                    </div>
                    <div className="col-sm-4"></div>
                </div>

                <div className="row rowMargin">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4 text-center">

                {/* {colors.length ? (
                    <div>
                    {colors.map(color => (
                    <button type="button" className="btn btn-dark"
                            onClick={(event) => {
                                const current = color
                                setRoom(event.target.value)
                                setColor(current)
                            }}
                            value={color}>{color}</button>
                            ))
                        }
                        </div>
                        ) : (
                    <div></div>
                )} */}

                        <button type="button" className="btn btn-dark"
                            onClick={(event) => {
                                // const current = colors.happy
                                setRoom(event.target.value)
                                setColor(event.target.value)
                            }}
                            value="happy">happy</button>

                        <button type="button" className="btn btn-dark"
                            onClick={(event) => {
                                // const current = colors.sad
                                setRoom(event.target.value)
                                setColor(event.target.value)
                            }}
                            value="sad">sad</button>

                        <button type="button" className="btn btn-dark"
                            onClick={(event) => {
                                // const current = colors.mad
                                setRoom(event.target.value)
                                setColor(event.target.value)
                            }}
                            value="mad">mad</button>

                        <button type="button" className="btn btn-dark"
                            onClick={(event) => {
                                // const current = colors.depress
                                setRoom(event.target.value)
                                setColor(event.target.value)
                            }}
                            value="depress">depress</button>

                    </div>
                    <div className="col-sm-4"></div>
                </div>

                <div className="row rowMargin">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4 text-center">
                        <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                            <button type='submit' className="btn btn-primary">Join</button>
                        </Link>
                    </div>
                    <div className="col-sm-4"></div>
                </div>

                {/* <select value={color} onChange={e => setColor(e.target.value)}>
                {Object.entries(colors).map(([name, value]) => (
                    <option key={`color--${name}`} value={value}>
                        {name}
                    </option>
                ))}
            </select> */}


            </div>

        </>
    )
}

export default Main;