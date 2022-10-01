import React from 'react'
import * as S from "./Styles";
import vhAgricultura from "../../images/vhAgricultura.png";
import vhCrypto from "../../images/vhCrypto.png";
import vhStocks from "../../images/vhStocks.png";
import vhBoosting from "../../images/vhBoosting.png";

export const ModalAgricultura = ({estate, changeEstate}) => {
  return (
    <>
        {estate &&
            <S.Overlay onClick={() => changeEstate(false)}>
                <S.ContainerModal onClick={e => e.stopPropagation()}>

                <S.CloseButton onClick={() => changeEstate(false)}>X</S.CloseButton>

                <S.ContainerInfoModal>
                        <S.InfoImg src={vhAgricultura} alt={"Agricultura"} />
                </S.ContainerInfoModal>

                </S.ContainerModal>            
            </S.Overlay>
        }
    </>
  )
}

export const ModalCrypto = ({estate, changeEstate}) => {
    return (
        <>
            {estate &&
                <S.Overlay onClick={() => changeEstate(false)}>
                    <S.ContainerModal crypto onClick={e => e.stopPropagation()}>
                        <S.HeaderModal>
                            <h1><b>Vehiculo #2</b> Crypto</h1>
                        </S.HeaderModal>

                    <S.CloseButton onClick={() => changeEstate(false)}>X</S.CloseButton>

                    <S.ContainerInfoModal>
                        <S.InfoImg crypto src={vhCrypto} alt={"Crypto"} />
                    </S.ContainerInfoModal>

                    </S.ContainerModal>            
                </S.Overlay>
            }
        </>
    )
}


export const ModalStocks = ({estate, changeEstate}) => {
    return (
        <>
            {estate &&
                <S.Overlay onClick={() => changeEstate(false)}>
                    <S.ContainerModal onClick={e => e.stopPropagation()}>

                    <S.CloseButton onClick={() => changeEstate(false)}>X</S.CloseButton>

                    <S.ContainerInfoModal>
                        <S.InfoImg src={vhStocks} alt={"Stocks"} />
                    </S.ContainerInfoModal>

                    </S.ContainerModal>            
                </S.Overlay>
            }
        </>
    )
}

export const ModalBoosting = ({estate, changeEstate}) => {
    return (
        <>
            {estate &&
                <S.Overlay onClick={() => changeEstate(false)}>
                    <S.ContainerModal onClick={e => e.stopPropagation()}>

                    <S.CloseButton onClick={() => changeEstate(false)}>X</S.CloseButton>

                    <S.ContainerInfoModal>
                        <S.InfoImg src={vhBoosting} alt={"Boosting"} />
                    </S.ContainerInfoModal>

                    </S.ContainerModal>            
                </S.Overlay>
            }
        </>
    )
}