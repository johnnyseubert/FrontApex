// Executar o servidor é o comando NPM START no terminal

import React from 'react';
import ReactDOM from 'react-dom';
import './estilos.css';

class Tabela extends React.Component {

    render() {

        let dados = [
            { "produto": "TV 32", "valor": 2300 },
            { "produto": "Notebook Dell", "valor": 4700 },
            { "produto": "Smartphone Galaxy S20", "valor": 7000 },
            { "produto": "Playstation 4", "valor": 3700 }
        ]

        return (
            <table>
                {dados.map((elemento) => (
                    <tr>
                        <td>{elemento.produto}</td>
                        <td>{elemento.valor}</td>
                    </tr>
                )
                )}</table>
        )
    }
}

// Servidor
ReactDOM.render(<Tabela />, document.getElementById('root'));