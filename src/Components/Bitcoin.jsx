import React, {useState} from 'react'

function Bitcoin() {
    const [bitcoin, setBitcoin] = useState(0)

    return(
        <div>
            <h1>Bitcoins actuales: { bitcoin }</h1>
            <button onClick={ () => setBitcoin(bitcoin - 1) }>Disminuir</button>
            <button onClick={ () => setBitcoin(bitcoin + 1) }>Aumentar</button>
        </div>
    )
}

export default Bitcoin