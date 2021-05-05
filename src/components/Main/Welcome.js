import React from 'react'
import Iframe from 'react-iframe'
import './Mainsec.css'

export default function Welcome() {
    return (
        <div>
            <div id="contenidos">
                
                <div className="grupo_index d-inline-flex align-items-center">
                        <Iframe url="https://www.youtube.com/embed/6mrJw1owcls" width="250" height="200" display="initial" 
                            position="relative" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
                            picture-in-picture; fullscreen"/>
                        <div className="card-body">
                            <h5 className="titulo-video">Video AMD RX Serie 6000</h5>
                            <p className="card-text"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias fugiat 
                                laudantium deserunt nulla, accusamus perferendis magni? Dicta, veniam nihil amet asperiores saepe 
                                enim molestias ea doloremque unde eaque corporis at?</p>
                        </div>
                </div >
                
                
                <div className="grupo_index d-inline-flex align-items-center">
                    <Iframe url="https://www.youtube.com/embed/FwrGTJw8SlU" width="250" height="200" display="initial" 
                            position="relative" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
                            picture-in-picture; fullscreen"/>
                    <div className="card-body ">
                        <h5 className="titulo-video">Video AMD Ryzen Serie 5000 </h5>
                        <p className="card-text"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias fugiat 
                            laudantium deserunt nulla, accusamus perferendis magni? Dicta, veniam nihil amet asperiores saepe enim 
                            molestias ea doloremque unde eaque corporis at?</p>
                    </div>
                </div >


                <div className="grupo_index d-inline-flex align-items-center">
                    <Iframe url="https://www.youtube.com/embed/jyZbArP-Y2w" width="250" height="200" display="initial" 
                            position="relative" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
                            picture-in-picture; fullscreen"/> 
                    <div className="card-body ">
                        <h5 className="titulo-video">Video Nvidia RTX Serie 3000 </h5>
                        <p className="card-text"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias fugiat laudantium 
                        deserunt nulla, accusamus perferendis magni? Dicta, veniam nihil amet asperiores saepe enim molestias ea 
                        doloremque unde eaque corporis at?</p>
                    </div>
                </div >
                
                
                <div class="grupo_index d-inline-flex align-items-center">
                    <Iframe url="https://www.youtube.com/embed/6VUtW2hRD08" width="250" height="200" display="initial" 
                            position="relative" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
                            picture-in-picture; fullscreen"/> 
                    <div class="card-body ">
                        <h5 class="titulo-video">Video Comparacion nuevas consolas </h5>
                        <p class="card-text"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias fugiat laudantium 
                        deserunt nulla, accusamus perferendis magni? Dicta, veniam nihil amet asperiores saepe enim molestias ea 
                        doloremque unde eaque corporis at?</p>
                    </div>
                </div >
            </div>
        </div>
    )
}
