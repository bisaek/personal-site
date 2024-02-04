import chatRead from "@assets/icons/chat-read.svg";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@ui/popover"
  

export default function Chat() {
    return (
        <div class=" right-4 bottom-4 fixed">
            <Popover>
            <PopoverTrigger><img class="h-16 hover:scale-110 transition" src={chatRead.src}></img></PopoverTrigger>
            <PopoverContent className="lg:h-96">
                <div>hello world</div>
            </PopoverContent>
            </Popover>
        </div>
    )
}