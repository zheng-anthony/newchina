import React, { useState } from "react";
import {ArrowBigLeft, ArrowBigRight} from "lucide-react" 
import pic1 from "./Pictures/Inside New China.webp"
import pic2 from "./Pictures/poop.png"


export default function ImageSlider() {

  const images = [pic1, pic2]
  return <div>

    <button><ArrowBigLeft/></button>
    <button><ArrowBigRight/></button>
    </div>
}


