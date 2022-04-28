import React from 'react'
import { Container, MediaItem } from './Media'
import {
  FaFacebookF,
  AiOutlineInstagram,
  BsWhatsapp,
  HiOutlineMail,
} from "react-icons/all";

const Media = () => {
  return (
    <Container>
        <a href="https://www.Facebook.com" target="_blank">
          <MediaItem>
            <FaFacebookF />
          </MediaItem>
        </a>
        <a href="https://www.Instagram.com" target="_blank">
          <MediaItem>
            <AiOutlineInstagram />
          </MediaItem>
        </a>
        <a href="https://www.Whatsapp.com" target="_blank">
          <MediaItem>
            <BsWhatsapp />
          </MediaItem>
        </a>
        <a href="https://www.Outlook.com" target="_blank">
          <MediaItem>
            <HiOutlineMail />
          </MediaItem>
        </a>
      </Container>
  )
}

export default Media;