import React from 'react'
import {BsInstagram} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {FaFacebook} from "react-icons/fa"

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.instagram.com/_k1k0__/" target = "blank"><BsInstagram/></a>
        <a href="https://www.github.com" target = "blank"><FaGithub/></a>
        <a href="https://www.facebook.com" target = "blank"><FaFacebook/></a>
    </div>
  )
}

export default HeaderSocials