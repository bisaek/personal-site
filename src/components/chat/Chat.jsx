import chatRead from "@assets/icons/chat-read.svg";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@ui/popover"
  

export default function Chat() {

    const wb = new WebSocket("ws://localhost:8080/ws")

    wb.addEventListener("open", (event) => {
        console.log("open")
    })

    wb.addEventListener("message", event => {
        console.log(event.data)
    })

    return (
        <div class=" right-4 bottom-4 fixed">
            <Popover>
            <PopoverTrigger><img class="h-16 hover:scale-110 transition" src={chatRead.src}></img></PopoverTrigger>
            <PopoverContent className="lg:h-96">
                <h3 classname="text-2xl">Chat</h3>

                <div>
                    
                </div>

            </PopoverContent>
            </Popover>
        </div>
    )
}