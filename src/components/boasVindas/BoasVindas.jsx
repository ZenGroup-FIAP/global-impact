import React from 'react'
import { BgPadrao, FlexBoxLogo, FlexBoxBoasVindas, Btn } from '../../styled'
import Logo from '../../img/logo/logo.svg'

export default function BoasVindas() {
    return (
        <BgPadrao>
            <FlexBoxLogo>
            <img src={Logo} alt="Logo" />
            <h1>Gerenciar:</h1>
            </FlexBoxLogo>

            <FlexBoxBoasVindas>
                <Btn>
                    <p>Dashboard</p>
                </Btn>
                <Btn>
                    <p>Alimentos</p>
                </Btn>
                <Btn>
                    <p>Supermercados</p>
                </Btn>
            </FlexBoxBoasVindas>
            
        </BgPadrao>
    )
}
