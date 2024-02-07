import { Select, SelectTrigger, SelectContent, SelectLabel, SelectGroup } from "@ui/select-without-icon";
import React from "react";


export default function Language() {
    return (
      <Select>
        <SelectTrigger className="border-none p-0 h-auto">
          <svg
            className="w-6"
            data-slot="icon"
            aria-hidden="true"
            fill="none"
            stroke-width="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
              stroke-linecap="round"
              stroke-linejoin="round"></path>
          </svg>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Dansk</SelectLabel>
            <SelectLabel>English</SelectLabel>
          </SelectGroup>
        </SelectContent>
      </Select>
    )
}