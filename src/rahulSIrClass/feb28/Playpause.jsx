import React,{useState,useRef}   from 'react'
import VIDEO from "./sunsetVideo.mp4"

const Playpause = () => {

    let [video,setVideo] =useState(VIDEO)
    let [play,setPlay] =useState(false)

    let videoRef=useRef()

    let handleChange= ()=>{
        if (!play){
            setPlay(true)
            videoRef.current.play()
            videoRef.current.style.width="100%"
            videoRef.current.style.height="80%"
        }
        else{
            setPlay(false)
            videoRef.current.pause()
            videoRef.current.style.width="100%"
            videoRef.current.style.height="80%"
        }
    }




  return (
    <div>
      <video src={video} ref={videoRef}  onClick={handleChange}   style={{width: "100%", height: "80%"}}></video>
    </div>
  )
}

export default Playpause
