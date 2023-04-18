import Navegador from "../components/Navegador"

export default function Inicio() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>
            <Navegador texto="Estiloso" destino="/estiloso" />
            <Navegador texto="Exemplo" destino="/exemplo" cor="#432818" />
            <Navegador texto="JSX" destino="/jsx" cor="#C6DEA6" />
            <Navegador texto="Navegação #01" destino="/navegacao" cor="#7ebdc3" />
            <Navegador texto="Navegação #02" destino="/cliente/123" cor="#7A6263" />
            <Navegador texto="Componente com Estado" destino="/estado" cor="#CED097" />
            <Navegador texto="Integraçao com API #01" destino="/integracao" cor="#99582A" />
            <Navegador texto="Conteudo Estatico" destino="/estatico" cor="#7ebdc3" />
        </div>

    )
} 