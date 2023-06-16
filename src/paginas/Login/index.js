import { useContext } from "react";
import Botao from "../../componentes/Botao";
import Container from "../../componentes/Container";
import Input from "../../componentes/Inputs";
import Titulo from "../../componentes/Titulo";
import Subtitulo from '../../componentes/Subtitulo'
import styles from './Login.module.scss'
import { useNavigate } from 'react-router-dom';
import { UsuarioContext } from "../../common/context/Usuario";

function Login() {
    const navigate = useNavigate();
    const { nome, setNome, saldo, setSaldo } = useContext(UsuarioContext)

    return (
        <Container>
            <div className={styles.titulos}>
                <Titulo>Bem vindo à nossa feirinha!</Titulo>
                <Subtitulo>Digite seu nome e seu saldo:</Subtitulo>
            </div>
            <div className={styles.dados}>
                <Input 
                    placeholder="Nome:" 
                    type="text"
                    value={nome}
                    onChange={(event) => setNome(event.target.value)}
                    maxLength={12}
                />
                <Input 
                    type="number"
                    value={saldo}
                    onChange={(event) => setSaldo(Number(event.target.value))}
                />
                <Botao 
                    disabled={nome.length < 4}
                    onClick={() => navigate('/feira')}>
                    Continuar
                </Botao>
            </div>
        </Container>
    )
}

export default Login