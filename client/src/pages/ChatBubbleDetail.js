import React, { useEffect, useState } from "react";

import BubbleDetail from "../components/bubbleDetail"

function ChatBubbleDetail() {

    return (
        <div>

            <BubbleDetail />

            <input placeholder={"Respond to bubble..."}></input>

            <button>Send Button</button>

        </div>
    );
}


export default ChatBubbleDetail;