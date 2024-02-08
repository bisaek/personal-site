import chatRead from "@assets/icons/chat-read.svg";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@ui/popover"
  
import { Card, CardContent, CardFooter, CardTitle, CardHeader, CardDescription } from "@ui/card";
import { Input } from "@ui/input";
import { ScrollArea } from "@ui/scroll-area";
import React, {useState} from "react";

export default function Chat() {

    const wb = new WebSocket("ws://localhost:8080/ws")

    const [messages, setMessages] = useState([""])

    wb.addEventListener("open", (event) => {
        console.log("open")
    })

    wb.addEventListener("message", event => {
        console.log(event.data)
        setMessages([...messages, event.data])
    })

    return (
        <div className=" right-4 bottom-4 fixed">
            <Popover>
            <PopoverTrigger><img className="h-16 hover:scale-110 transition" src={chatRead.src}></img></PopoverTrigger>
            <PopoverContent className="" side="left">

                <div className="flex flex-col gap-4">
                    <h3 className="text-3xl">Chat</h3>
                    <ScrollArea className="h-96 overflow-x-auto" type="auto">
                        {messages.map((message) => <div>{message}</div>)}
                    </ScrollArea>
                    <div><input type="text" /></div>
                </div>

            </PopoverContent>
            </Popover>
        </div>
    )
}