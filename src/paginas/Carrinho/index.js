import { useContext, useMemo } from "react";
import { UsuarioContext } from "../../common/context/Usuario";
import Container from "../../componentes/Container";
import Produtos from "../../componentes/Produtos";
import Titulo from "../../componentes/Titulo";
import { useCarrinhoContext } from "../../common/context/Carrinho";
import Botao from '../../componentes/Botao'
import FormaPagamento from "../../componentes/FormaPagamento";
import styles from './Carrinho.module.scss'

export default function Carrinho() {
  const { carrinho, quantidadeCarrinho, comprar, valorTotal = 0 } = useCarrinhoContext();
  const { saldo = 0 } = useContext(UsuarioContext);
  const total = useMemo(() => saldo - valorTotal, [saldo, valorTotal])
    
    return (
        <Container>
            <Titulo>Carrinho</Titulo>
            <section className={styles.carrinho}>
                {carrinho.map((produto) => (
                    <Produtos
                        {...produto}
                        key={produto.id}
                    />
                ))}
            </section>
                <FormaPagamento/>
                <Botao
                    onClick={() => {
                        comprar()
                        alert("Compra feita com sucesso!")
                    }}
                    disabled={quantidadeCarrinho === 0 || total < 0}
                >
                    Comprar
                </Botao>
        </Container>
    )
}