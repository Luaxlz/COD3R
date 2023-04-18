import styles from '../styles/Estiloso.module.css'
import Layout from '../components/Layout'


export default function Estiloso() {
    return (
        <Layout titulo="Exemplo de CSS modularizado">
            <div className={styles.roxo}>
                <h1>Cheio de Estilo</h1>
                <p> Hakuna Matata</p>
            </div>
        </Layout>
    )
}