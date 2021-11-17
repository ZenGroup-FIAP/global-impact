import styled from 'styled-components'

export const HeaderStyled = styled.header`
    font-family: Arial, Helvetica, sans-serif;
    background-color: #243A77;
    color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5px;
    font-weight: bold;

    a {
        color: #fff;
    }

    ul li a:hover {
        text-decoration: underline;
    }

    ul {
        list-style: none;
        display: flex;
    }

    ul li {
        margin: 0 10px;
    }

    button {
        display: none;
    }

    .closed {
        display: none;
    }

    .open {
        display: none;
    }

    @media only screen and (max-width: 660px) {
        flex-wrap: wrap;
        flex-direction: column;

        justify-content: center;
        align-items: center;

        padding: 20px 0px 0px 0px;


        nav {
            display: none;
        }

        button {
           display: block;
           margin: 10px;
        }

        .open {
            display: block;
            width: 100%;
        }

        .open ul {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            display: flex;
            width: 100%;
        }

        .open ul li {   
            display: flex;
            justify-content: center;
            padding: 20px 0px;
        }

        .open ul li:hover {
            width: 100%;
            background-color: #15B184;
        }


    }
`

export const ButtonHeaderStyle = styled.button`
    font-family: Arial, Helvetica, sans-serif;
    background-color: #243A77;
    color: #fff;
    border: 2px solid #fff;
    font-size: 24px;
` 

export const Container = styled.div`
    max-width: 1200px;
    position: relative;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
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

export const BtnAzul = styled.div`
    padding: 5px 10px;
    border: 3px solid #243A77;
    width: 200px;
    text-align: center;
    margin-top: 40px;

    p {
        color: #243A77;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        font-size: 20px;
        line-height: 25px;
    }
`

/* Form */

export const Titulo = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 50px;
    line-height: 70px;
    margin-top: 70px;
`

export const Form = styled.form`
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    label {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px;
        margin: 20px 0 5px 0;
        text-transform: uppercase;
        font-weight: bold;
    }

    input, select {
        width: 500px;
        text-align: left;
        border: 3px solid #243A77;
        padding: 5px 10px;
    }

    select {
        width: 526px;
    }

    .FlexBtn {
        align-self: flex-end;
    }
`