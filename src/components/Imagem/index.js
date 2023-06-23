import React from "react"

const { default: Image } = require("next/image")


const Index = (props) => {
    const { src, w, h, flex } = props

    return (
        <>

            {

                !flex ? (<Image  alt="" style={ w && {  width: w,  height: h , fill: 'red'} } fetchPriority="high" src={src} height={h} width={w} />)
                    : (<Image  alt='' src={src} fill fetchPriority="high" />)

            } 
            
        </>

    )
}

export default React.memo(Index)