import React from 'react'

export default function CadastroUsuarios() {
    return (
        <form action="">
            <label htmlFor="login">Login</label>
            <input type="text" name="login" id="loginId" />
            <label htmlFor="senha">Senha</label>
            <input type="password" name="senha" id="senhaId" />
            <label htmlFor="supermercado">Supermercado</label>
            <select name="supermercados" id="supermercadosId">
                <option value="111" key="mercado1">Mercado1</option>
                <option value="112" key="mercado2">Mercado2</option>
                <option value="113" key="mercado3">Mercado3</option>
                <option value="114" key="mercado4">Mercado4</option>
            </select>
            <button type="submit">Enviar</button>
        </form>
    )
}
