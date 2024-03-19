import Header from "./Header"
import Js from '../images/js.png'
import Css from '../images/css.png'
import Html from '../images/html.png'
import Node from '../images/node.png'
import React from '../images/react.png'
import Sql from '../images/sql.png';
import Item from './Item'

const Itens = () => {
    const linguagens = [
        {
            titulo: 'React JS',
            img: React
        },
        {
            titulo: 'JavaScript',
            img: Js
        },
        {
            titulo: 'CSS 3',
            img: Css
        },
    ]
    return (
        <>

            <Header titulo="Habilidades" />
            <div className="styleItens">
                {
                    linguagens.map((linguagem) => {
                        return (
                            <Item titulo={linguagem.titulo} img={linguagem.img} />
                        )
                    })
                }

            </div>


        </>

    )
}
export default Itens;
