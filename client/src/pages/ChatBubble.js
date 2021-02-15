import React, { useEffect, useState } from "react";

import Bubble from "../components/bubble"

function ChatBubble() {

    return (
        <div>

            <Bubble />

            <input placeholder={"Share your thought here..."}></input>

            <button>Send Button</button>


        </div>
    );
}


export default ChatBubble;