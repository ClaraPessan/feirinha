import { useContext } from "react";
import Container from "../../componentes/Container";
import Produtos from "../../componentes/Produtos";
import Titulo from "../../componentes/Titulo";
import styles from './Feira.module.scss'
import feira from './feira.json'
import { BsCart4 } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import { UsuarioContext } from '../../common/context/Usuario';
import Subtitulo from "../../componentes/Subtitulo";

export default function Feira() {
    const navigate = useNavigate()
    const { nome, saldo = 0 } = useContext(UsuarioContext)

    return (
        <Container>
            <section className={styles.feira}>
                <div className={styles.carrinho}>
                    <BsCart4 
                        size={25} 
                        color="#4b4b4b"
                        onClick={() => navigate('/carrinho')}
                    />
                </div>
                <div className={styles.informacoes}>
                    <Titulo>Olá, {nome}!</Titulo>
                    <Titulo>Saldo: R${saldo.toFixed(2)}</Titulo>
                </div>
                <div className={styles.produtos}>
                    <Subtitulo>Produtos:</Subtitulo>
                    {feira.map(produto => (
                        <Produtos
                            {...produto}
                            key={produto.id}
                        />
                    ))}
                </div>
            </section>
        </Container>
    )
}