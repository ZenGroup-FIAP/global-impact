import React from 'react'

export default function Login() {
    return (
        <form action="">
            <label htmlFor="login">Login</label>
            <input type="text" name="login" id="loginId" />
            <label htmlFor="senha">Senha</label>
            <input type="password" name="senha" id="senhaId" />
            <button type="submit">Enviar</button>
        </form>
    )
}
