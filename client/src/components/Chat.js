import React, {useState, useEffect} from 'react'
import queryString from "query-string"
import io from "socket.io-client"
import {ChatBox} from "react-chatbox-component"


let socket;

const Chat = ({location})=> {

    const [name , setName] = useState('');
    const [room , setRoom] = useState('');
    const [message , setMessage] = useState([]);
    const [messages , setMessages] = useState([]);
    const ENDPOINT = 'https://speak-upp.herokuapp.com/' 
    

    useEffect(()=>{
        const {name , room} = queryString.parse(location.search)

        socket = io(ENDPOINT)

        setName(name)
        setRoom(room)
        console.log(socket)


        socket.emit('join' , { name , room},()=>{
            
        })

        return ()=>{
            socket.emit('disconnect');
            socket.off()
        }

    },[ENDPOINT , location.search])


    useEffect(()=>{
        socket.on('message',(message)=>{
            setMessages([...messages,message])
        })

    },[messages])

    //function to send messages

    const sendMessage = (event , newMessage)=>{ 

            event.preventDefault()

            // console.log(badWordAlgo(message))

        

            if(message){

            console.log(message)

            socket.emit('sendMessage',message,()=> setMessage(''))

            }

        
        


        
        

    }

    console.log(message , messages)


    const badWordAlgo = (event) => {

        const words = [
            "2g1c",
            "2 girls 1 cup",
            "acrotomophilia",
            "alabama hot pocket",
            "alaskan pipeline",
            "anal",
            "anilingus",
            "anus",
            "apeshit",
            "arsehole",
            "ass",
            "asshole",
            "assmunch",
            "auto erotic",
            "autoerotic",
            "babeland",
            "baby batter",
            "baby juice",
            "ball gag",
            "ball gravy",
            "ball kicking",
            "ball licking",
            "ball sack",
            "ball sucking",
            "bangbros",
            "bareback",
            "barely legal",
            "barenaked",
            "bastard",
            "bastardo",
            "bastinado",
            "bbw",
            "bdsm",
            "beaner",
            "beaners",
            "beaver cleaver",
            "beaver lips",
            "bestiality",
            "big black",
            "big breasts",
            "big knockers",
            "big tits",
            "bimbos",
            "birdlock",
            "bitch",
            "bitches",
            "black cock",
            "blonde action",
            "blonde on blonde action",
            "blowjob",
            "blow job",
            "blow your load",
            "blue waffle",
            "blumpkin",
            "bollocks",
            "bondage",
            "boner",
            "boob",
            "boobs",
            "booty call",
            "brown showers",
            "brunette action",
            "bukkake",
            "bulldyke",
            "bullet vibe",
            "bullshit",
            "bung hole",
            "bunghole",
            "busty",
            "butt",
            "buttcheeks",
            "butthole",
            "camel toe",
            "camgirl",
            "camslut",
            "camwhore",
            "carpet muncher",
            "carpetmuncher",
            "chocolate rosebuds",
            "circlejerk",
            "cleveland steamer",
            "clit",
            "clitoris",
            "clover clamps",
            "clusterfuck",
            "cock",
            "cocks",
            "coprolagnia",
            "coprophilia",
            "cornhole",
            "coon",
            "coons",
            "creampie",
            "cum",
            "cumming",
            "cunnilingus",
            "cunt",
            "dafuq",
            "dank",
            "darkie",
            "date rape",
            "daterape",
            "deep throat",
            "deepthroat",
            "dendrophilia",
            "dick",
            "dork",
            "dildo",
            "dingleberry",
            "dingleberries",
            "dips hit",
            "dirty pillows",
            "dirty sanchez",
            "doggie style",
            "doggiestyle",
            "doggy style",
            "doggystyle",
            "dog style",
            "dolcett",
            "domination",
            "dominatrix",
            "dommes",
            "donkey punch",
            "double dong",
            "double penetration",
            "douche",
            "douchebag",
            "dumbass",
            "dp action",
            "dry hump",
            "dvda",
            "eat my ass",
            "ecchi",
            "ejaculation",
            "erotic",
            "erotism",
            "escort",
            "eunuch",
            "fag",
            "faggot",
            "fecal",
            "felch",
            "fellatio",
            "feltch",
            "female squirting",
            "femdom",
            "figging",
            "fingerbang",
            "fingering",
            "fisting",
            "foot fetish",
            "footjob",
            "frotting",
            "fuck",
            "fuck buttons",
            "fuckin",
            "fucking",
            "fucktards",
            "fudge packer",
            "fudgepacker",
            "futanari",
            "gang bang",
            "gay sex",
            "genitals",
            "giant cock",
            "girl on",
            "girl on top",
            "girls gone wild",
            "goatcx",
            "goatse",
            "god damn",
            "gokkun",
            "golden shower",
            "goodpoop",
            "goo girl",
            "goregasm",
            "grope",
            "group sex",
            "g-spot",
            "guro",
            "hand job",
            "handjob",
            "hard core",
            "hardcore",
            "hentai",
            "hoe",
            "homoerotic",
            "honkey",
            "hooker",
            "hot carl",
            "hot chick",
            "how to kill",
            "how to murder",
            "huge fat",
            "hussy",
            "humping",
            "incest",
            "intercourse",
            "jack off",
            "jail bait",
            "jailbait",
            "jelly donut",
            "jerk off",
            "jigaboo",
            "jiggaboo",
            "jiggerboo",
            "jizz",
            "juggs",
            "kike",
            "kinbaku",
            "kinkster",
            "kinky",
            "knobbing",
            "leather restraint",
            "leather straight jacket",
            "lemon party",
            "lolita",
            "lovemaking",
            "make me come",
            "male squirting",
            "masturbate",
            "menage a trois",
            "milf",
            "missionary position",
            "motherfucker",
            "mound of venus",
            "mr hands",
            "muff diver",
            "muffdiving",
            "nambla",
            "nawashi",
            "negro",
            "neonazi",
            "nigga",
            "nigger",
            "nig nog",
            "nimphomania",
            "nipple",
            "nipples",
            "nsfw images",
            "nude",
            "nudity",
            "nympho",
            "nymphomania",
            "octopussy",
            "omorashi",
            "one cup two girls",
            "one guy one jar",
            "orgasm",
            "orgy",
            "paedophile",
            "paki",
            "panties",
            "panty",
            "pedobear",
            "pedophile",
            "pegging",
            "penis",
            "phone sex",
            "piece of shit",
            "pissing",
            "piss pig",
            "pisspig",
            "playboy",
            "pleasure chest",
            "pole smoker",
            "ponyplay",
            "poof",
            "poon",
            "poontang",
            "punany",
            "poop chute",
            "poopchute",
            "porn",
            "porno",
            "pornography",
            "prince albert piercing",
            "pthc",
            "pubes",
            "pussy",
            "queaf",
            "queef",
            "quim",
            "raghead",
            "raging boner",
            "rape",
            "raping",
            "rapist",
            "rectum",
            "reverse cowgirl",
            "rimjob",
            "rimming",
            "rosy palm",
            "rosy palm and her 5 sisters",
            "rusty trombone",
            "sadism",
            "santorum",
            "scat",
            "schlong",
            "scissoring",
            "semen",
            "sex",
            "sexo",
            "sexy",
            "shaved beaver",
            "shaved pussy",
            "shemale",
            "shibari",
            "shit",
            "shitblimp",
            "shitty",
            "shota",
            "shrimping",
            "skeet",
            "slanteye",
            "slut",
            "s&m",
            "smut",
            "snatch",
            "snowballing",
            "sodomize",
            "sodomy",
            "spic",
            "splooge",
            "splooge moose",
            "spooge",
            "spread legs",
            "spunk",
            "strap on",
            "strapon",
            "strappado",
            "strip club",
            "style doggy",
            "suck",
            "sucks",
            "suicide girls",
            "sultry women",
            "swastika",
            "swinger",
            "tainted love",
            "taste my",
            "tea bagging",
            "threesome",
            "throating",
            "tied up",
            "tight white",
            "tit",
            "tits",
            "titties",
            "titty",
            "tongue in a",
            "topless",
            "tosser",
            "towelhead",
            "tranny",
            "tribadism",
            "tub girl",
            "tubgirl",
            "tushy",
            "twat",
            "twink",
            "twinkie",
            "two girls one cup",
            "undressing",
            "upskirt",
            "urethra play",
            "urophilia",
            "vagina",
            "venus mound",
            "vibrator",
            "violet wand",
            "vorarephilia",
            "voyeur",
            "vulva",
            "wank",
            "wetback",
            "wet dream",
            "whore",
            "white power",
            "wrapping men",
            "wrinkled starfish",
            "xx",
            "xxx",
            "yaoi",
            "yellow showers",
            "yiffy",
            "zoophilia"
            ]
        const input = event.target.value;
        
        if(words.some(word => input.toLowerCase().includes(word))){
        
            var arr = []
        
            for(var i=0 ; i<=words.length ; i++){
                if(input.toLowerCase().includes(words[i])){
                    arr.push(words[i])
                }
            }
            arr.map((word)=>{

            const newMessage = input.replaceAll(word , '❤️')
            console.log(newMessage)
            setMessage(newMessage)
            
        })
            return 
        }
        else{
            setMessage(input)
            console.log("no bad words detected")
            
        }

    }
    

    // const replaceWord = (arr , message,event) => {

    //     console.log("bad words found here:",arr)
    //     console.log("message is: ",message)

    //     // map through bad words and if it is found in string do a replace

    //     arr.map((word)=>{

    //         const newMessage = message.replaceAll(word , 'love')
    //         console.log(newMessage)
            
    //     })


     

        

    // }

    



    return (
        <div>
        <h1>chat page</h1>

        <div>
            <input value={message} onChange={(event)=>{badWordAlgo(event)}} onKeyPress={event=>event.key === 'Enter'?sendMessage(event):null}/>
        </div>
        <div>
            {messages.length > 0? messages.map((im , i)=>{

                // console.log(`index is ${i} and data is ${im.text}`)
                return(<p>{im.user}: {im.text}</p>)
                
            }):null}


        </div>
        </div>


    )
}

export default Chat