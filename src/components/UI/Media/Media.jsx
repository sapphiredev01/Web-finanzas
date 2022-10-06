import React from 'react'
import { Container, MediaItem } from './Styles'
import {
  AiOutlineInstagram,
  BsWhatsapp,
  HiOutlineMail,
} from "react-icons/all";

const Media = () => {
  return (
    <Container>
        <a href="https://www.instagram.com/finpei.mx/" target="_blank">
          <MediaItem>
            <AiOutlineInstagram />
          </MediaItem>
        </a>
        <a href="https://wa.me/message/WXW4WNFS6LNPB1" target="_blank">
          <MediaItem>
            <BsWhatsapp />
          </MediaItem>
        </a>
        <a href="mailto:contacto@finpei.com.mx?Subject=Interesado%20en%20asesoria%20Finpei">
          <MediaItem>
            <HiOutlineMail />
          </MediaItem>
        </a>
      </Container>
  )
}

export default Media;