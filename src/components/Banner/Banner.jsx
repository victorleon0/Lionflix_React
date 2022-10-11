import "./Banner.scss";

import React, { useState, useEffect } from "react";

import banner from './../../assets/banner.png'
import bannerLogo from './../../assets/LIONFLIX.png';
import play from './../../assets/play.png'
import info from './../../assets/info.png'
import preview from './../../assets/Preview.mp4'



const Play = () => (
    <button type="button" className="play">
      <img src={play} alt="Play" />
      Play
    </button>
  )
  
  const Info = () => (
    <button type="button" className="buttonInfo">
      <img src={info} alt="Info" />
      More Info
    </button>
  )

function Banner() {
    const [isFirstTime, setFistTime] = useState(true)
    const video = React.createRef()
  
    const showImage = () => {
      video.current.load()
    }
  
    useEffect(() => {
      if (isFirstTime) {
        video?.current.play()
        setFistTime(false)
      }
    }, [isFirstTime])
  
    const handleScroll = () => {
      if (window.pageYOffset === 0) {
        setFistTime(true)
      } else if (window.pageYOffset >= 300) {
        video.current.load()
      }
    }
    window.addEventListener('scroll', handleScroll)
  
    return (
      <div className="banner">
        <div className="info">
          <img src={bannerLogo} alt="BannerLogo" />
          <div>SMILE</div>
          <p>Después de ser testigo de un extraño y traumático accidente que involucró a una paciente, la Dr. Rose Cotter (Sosie Bacon) empieza a experimentar sucesos aterradores que no puede explicarse. </p>
          <div className="buttons">
            <Info />
          </div>
        </div>
        <video muted poster={banner} alt="" className="preBanner" onEnded={showImage} ref={video}>
          <source src={preview} type="video/mp4" />
        </video>
      </div>
    )
  }
  
export default Banner;
