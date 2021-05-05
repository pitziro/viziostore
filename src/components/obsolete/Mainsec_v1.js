import React, { useState, useEffect } from 'react'
import './Mainsec.css';
import ItemList from '../Main/ItemList'



function Mainsec() {

    const [ListaGPU, setListaGPU] = useState([])
    
    useEffect( () => {

        let getGpuList = async () => {
            const responseGPU =  await fetch (
                    'https://raw.githubusercontent.com/pitziro/viziostore/master/src/myjson/gpu.json')    
            const responseGPUjson = responseGPU.json()
            return responseGPUjson
        }

        const nuevaListaGPU = getGpuList()
        setListaGPU(nuevaListaGPU)

        console.log (nuevaListaGPU)
    }, []);
    

    /* Consulta de RAM 
    const [ListaRAM, setListaRAM] = useState([])

    const handleClickRAM = async () => {
        
        if (ListaRAM.length === 0) {
        let getRAMList = async () => {
            const responseRAM = await fetch(
                'https://pitziro.github.io/Viziozone/myJSON/ram.json' )
            const responseRAMjson = responseRAM.json()
            return responseRAMjson
        }
        const nuevaListaRAM = await getRAMList()
        setListaRAM(nuevaListaRAM)
        }
        
        setDivVisible( (divVisible==='hidden') ? 'visible' : 'hidden')
    }
    
    const [divVisible, setDivVisible] = useState ('hidden')
    const divStyle = {
        visibility : divVisible
    };

    */

    return (
        <div className='item_container'>
            { 
                ( ListaGPU ? 
                    (ListaGPU.map((ListaGPU) => (
                        <ItemList
                            Modelo={ListaGPU.Modelo}
                            PrecioME={ListaGPU.PrecioMN}
                            Almacen={ListaGPU.Almacen}
                        />
                    )))
                    :
                    (<p> Consultando la BD.... </p>)
                )
            }


            {/* <div className="section_btn">
            <Button variant="danger" size="sm" onClick={handleClickRAM}>Mostrar Memorias RAM tambien</Button>
            </div>

            <div className="section_rams" style={divStyle}>
            {
                ListaRAM.map( (ListaRAM) => (
                    <Card bg='dark' className='Tarjeta2' >
                        <Card.Body>
                            <Card.Title>
                                {ListaRAM.Modelo}
                            </Card.Title>
                            <Card.Subtitle>
                                {ListaRAM.PrecioMN}
                            </Card.Subtitle>
                        </Card.Body>
                        <Card.Footer>
                            Stock disponible: {ListaRAM.Almacen}
                        </Card.Footer>
                    <div className="icono">
                        <ItemCount stock={ListaRAM.Almacen}/>
                    </div>
                </Card> 
                ))
            }
            </div> */}

        </div>
    )
}

export default Mainsec
