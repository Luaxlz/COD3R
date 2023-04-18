import Layout from "@/src/components/Layout";
import {useRouter} from 'next/router'

export default function ClientePorCodigo() {
    const router = useRouter()
    return (
        <Layout titulo="Navegaçao Dinamica">
            <span>Codigo = {router.query.codigo}</span>
        </Layout>
    )
}