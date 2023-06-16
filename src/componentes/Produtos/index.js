import { useContext } from 'react'
import styles from './Produtos.module.scss'
import { UsuarioContext } from '../../common/context/Usuario'
import { useCarrinhoContext } from '../../common/context/Carrinho'

export default function Produtos({ id, nome, foto, valor, unidade}) {
    const { carrinho, adicionarProduto, removerProduto, valorTotal } = useCarrinhoContext()
    const { saldo } = useContext(UsuarioContext)
    const itemNoCarrinho = carrinho.find(item => item.id === id)
 
    return (
        <div className={styles.produto}>
            <div className={styles.produto__principal}>
                <img src={foto} alt={nome}/>
                <h4>{nome} - R$ {valor.toFixed(2)} <span>Kg</span></h4>
            </div>
            
            <div className={styles.produto__adicionar}>
                <button 
                    className={styles.diminuir}
                    disabled={!itemNoCarrinho || itemNoCarrinho.quantidade === 0}
                    onClick={() => removerProduto(id)}
                > 
                    -
                </button>
                    {itemNoCarrinho?.quantidade || 0}
                <button 
                    className={styles.aumentar}
                    disabled={valorTotal > saldo}
                    onClick={() => adicionarProduto({
                        id,
                        nome,
                        foto,
                        valor,
                        unidade
                    })}
                >
                    +
                </button>
            </div>
        </div>
    )
}