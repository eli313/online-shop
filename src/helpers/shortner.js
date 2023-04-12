import React from "react";

const Shortner = (title) => {
    const shorterTitle = title.split(" ")
    return(`${shorterTitle[0]} ${shorterTitle[1]}`)
}
 
export default Shortner;