import react from 'react'
import reacDOM from 'react-dom'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

reacDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Pedro" sobrenome="Silva" />
            <Filho nome="Paulo" sobrenome="Silva" />
            <Filho nome="Carla" sobrenome="Silva" />
        </Pai>
    </div>
    , document.getElementById('root'))



// reacDOM.render(<h1>React</h1>, document.getElementById('root'))