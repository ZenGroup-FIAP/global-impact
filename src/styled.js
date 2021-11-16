import styled from 'styled-components'

export const Container = styled.div`
    background-color: gray;
`

export const BgPadrao = styled.div`
    background-color: #243A77;
    width: 100%;
`

export const FlexBoxLogo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;

    img {
        max-width: 100%;
    }

    h1 {
        color: #FFF;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 40px;
        line-height: 45px;
    }
`

export const FlexBoxBoasVindas = styled.div`
    display: flex;
    margin: 0 auto;
    max-width: 1000px;
    justify-content: space-between;
    align-items: center;
`

export const Btn = styled.div`
    padding: 5px 10px;
    border: 3px solid #FFF;
    width: 200px;
    text-align: center;

    p {
        color: #FFF;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
        line-height: 25px;
    }
`