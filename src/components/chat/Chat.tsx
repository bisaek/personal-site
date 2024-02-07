import chatRead from "@assets/icons/chat-read.svg";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@ui/popover"
  
import { Card, CardContent, CardFooter, CardTitle, CardHeader, CardDescription } from "@ui/card";
import { Input } from "@ui/input";
import React from "react";

export default function Chat() {

    const wb = new WebSocket("ws://localhost:8080/ws")

    wb.addEventListener("open", (event) => {
        console.log("open")
    })

    wb.addEventListener("message", event => {
        console.log(event.data)
    })

    return (
        <div className=" right-4 bottom-4 fixed">
            <Popover>
            <PopoverTrigger><img className="h-16 hover:scale-110 transition" src={chatRead.src}></img></PopoverTrigger>
            <PopoverContent className="" side="left">

                <Card className="   ">
                    <CardTitle>Chat</CardTitle>
                    <CardContent>
                        hello world
                    </CardContent>
                    <CardFooter>
                        <Input></Input>
                    </CardFooter>
                </Card>

            </PopoverContent>
            </Popover>
        </div>
    )
}