import React, { useState } from 'react'
import './Mainsec.css';
import ItemCount from './ItemCount';
import { Card  } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


function Mainsec() {

    const [ListaGPU, setListaGPU] = useState(
        [
            {
                "Categoria": "Nvidia",
                "Raza": "MSI",
                "Modelo": "MSI GEFORCE GT 710 2GB DDR3 64BITS",
                "PrecioME": "$59,00",
                "PrecioMN": "S/.217,12",
                "Almacen": "10"
            },
            {
                "Categoria": "Nvidia",
                "Raza": "ZOTAC",
                "Modelo": "GALAX GEFORCE GT 1030 2GB GDDR5 64BITS",
                "PrecioME": "$97,85",
                "PrecioMN": "S/.360,09",
                "Almacen": "8"
            },
            {
                "Categoria": "Nvidia",
                "Raza": "GIGABYTE",
                "Modelo": "GIGABYTE GT 1030 2GB GDR5",
                "PrecioME": "$99,00",
                "PrecioMN": "S/.364,32",
                "Almacen": "CONSULTAR STOCK"
            },
            {
                "Categoria": "Nvidia",
                "Raza": "PNY",
                "Modelo": "PNY NVIDIA GEFORCE GTX 1650 DUAL FAN 4GB",
                "PrecioME": "$186,00",
                "PrecioMN": "S/.684,48",
                "Almacen": "7"
            },
            {
                "Categoria": "Nvidia",
                "Raza": "GALAX",
                "Modelo": "GALAX GEFORCE GTX 1650 EX PLUS (1-CLICK OC)",
                "PrecioME": "$189,00",
                "PrecioMN": "S/.695,52",
                "Almacen": "6"
            },
            {
                "Categoria": "Nvidia",
                "Raza": "ASUS",
                "Modelo": "ASUS GEFORCE GTX 1650 DUAL 4GB",
                "PrecioME": "$209,00",
                "PrecioMN": "S/.769,12",
                "Almacen": "AGOTADO"
            },
            {
                "Categoria": "Nvidia",
                "Raza": "ASUS",
                "Modelo": "EVGA GEFORCE GTX 1650 SUPER 4GB SC ULTRA GAMING",
                "PrecioME": "$227,00",
                "PrecioMN": "S/.835,36",
                "Almacen": "5"
            },
            {
                "Categoria": "Nvidia",
                "Raza": "ASUS",
                "Modelo": "ASUS GEFORCE NVIDIA TUF GAMING GTX 1650 OC 4GB GDDR6",
                "PrecioME": "$228,00",
                "PrecioMN": "S/.839,04",
                "Almacen": "1"
            },
            {
                "Categoria": "Nvidia",
                "Raza": "ZOTAC",
                "Modelo": "MSI NVIDIA GTX 1650 D6 GAMING X 4GB GDDR6",
                "PrecioME": "$228,00",
                "PrecioMN": "S/.839,04",
                "Almacen": "CONSULTAR STOCK"
            },
            {
                "Categoria": "Nvidia",
                "Raza": "MSI",
                "Modelo": "MSI NVIDIA GTX 1650 SUPER GAMING X 4GB GDDR6",
                "PrecioME": "$229,00",
                "PrecioMN": "S/.842,72",
                "Almacen": "AGOTADO"
            },
            {
                "Categoria": "Nvidia",
                "Raza": "ZOTAC",
                "Modelo": "ZOTAC GAMING GEFORCE GTX 1650 SUPER 4GB",
                "PrecioME": "$229,00",
                "PrecioMN": "S/.842,72",
                "Almacen": "1"
            },
            {
                "Categoria": "Nvidia",
                "Raza": "ASUS",
                "Modelo": "ASUS TUF GEFORCE GTX 1650 SUPER OC 4GB GDDR6",
                "PrecioME": "$229,00",
                "PrecioMN": "S/.842,72",
                "Almacen": "2"
            }
        ]
    )

    const [ListaRAM, setListaRAM] = useState([])

    const [divVisible, setDivVisible] = useState ('hidden')
    
    /* Consulta de RAM */
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

    const divStyle = {
        visibility : divVisible
    };


    return (
        <div className='item_container'>
            { 
                ListaGPU.map( (ListaGPU) => (
                <Card bg='dark' className='Tarjeta' >
                        <Card.Body>
                            <Card.Title>
                                {ListaGPU.Modelo}
                            </Card.Title>
                            <Card.Subtitle>
                                {ListaGPU.PrecioMN}
                            </Card.Subtitle>
                        </Card.Body>
                        <Card.Footer>
                            Stock disponible: {ListaGPU.Almacen}
                        </Card.Footer>
                    <div className="icono">
                        <ItemCount stock={ListaGPU.Almacen}/>
                    </div>
                </Card> 
                ))
            }

            <div className="section_btn">
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
            </div>
        </div>
    )
}

export default Mainsec
