"use client"

import { ChevronUp } from "lucide-react"
import ScrollToTop from "react-scroll-up"


const ScrollButton = () => {
  return (
    <div className="relative bottom-10 z-[1000]">
      <ScrollToTop showUnder={150} >
        <p className="cursor-pointer text-primary border-2 border-primary rounded-full p-3 hover:bg-primary hover:text-white">
            <ChevronUp/>
        </p>
      </ScrollToTop>
    </div>
  )
}

export default ScrollButton
