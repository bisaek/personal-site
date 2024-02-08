import { Popover, PopoverContent, PopoverTrigger } from "@ui/popover";
import { Button } from "@/components/ui/button"
import React from "react";
import { Separator } from "@ui/separator";
import { Languages } from "lucide-react";


export default function Language() {
    let language = "dansk"

    return (
      <Popover>
        <PopoverTrigger className="border-none p-0 h-auto">
        
          <Button variant="ghost"><Languages /> {language}</Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto">
          <div className="flex space-x-4 items-center">
            <a href="https://localhost:4321/en">English</a>
            <Separator orientation="vertical" className="text-white" />
            <a href="https://localhost:4321/da">Dansk</a>
          </div>
        </PopoverContent>
      </Popover>
    )
}