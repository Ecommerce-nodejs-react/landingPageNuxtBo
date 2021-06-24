import React,{useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import iphoneImg from '../../assets/iphone.png';
import subirCatalogos from '../../assets/subirCatalogos.png';
import imgLaptopAndImage from '../../assets/laptopAndMobile.png';
import imgMobileOwner from '../../assets/mobileOwner.png';
import './bodyContend.css'



const BodyContent =()=>{

    
    return(
        <div>
            <section id="section-1"  className=" w-full h-auto sm:h-full pb-20 " >
                  
                <div className="flex flex-rows-1 justify-center pt-8 ">
                    <h1 id="title-navbar " className="font-extrabold text-5xl  z-10">NuxtBo  </h1>
                    <div className="my-auto justify-content text-3xl">👍</div>
                </div>
             


                {/* animacion de la burbuja green */}
                <div id="esfersAmorfa" className=" h-60"></div>
                <div  id="p2" className="absolute top-0 right-0 right-0"></div>

                <div className="flex flex-col sm:flex-row  justify-between">
                    <div className="w-full sm:w-2/4  mt-10 sm:mt-40 mx-1 sm:mx-10">
                        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.6}} className="h-full font-bold">
                            <h1 className="text-gray-800 text-4xl sm:text-5xl font-black"><span id="text-online" className="text-green-400">Vende en linea</span>  y recibe los pedidos en tu <span className="text-green-600">Whatsapp</span> </h1>
                            <h2 className="text-gray-500 text-lg mt-4">Toma el control de tus ventas y obten 100% de tus ingresos</h2>
                            <h3 className="text-gray-500 text-lg">Crea tu catalogo de porductos o una tienda en linea</h3>
                            <div className="hidden sm:inline">
                                <motion.button initial={{opacity:0,y:-200}} animate={{opacity:1,y:0}} id="btn-empezar" className="p-2 mt-3 bg-white shadow-2xl w-60 focus:outline-none border-2 border-green-600 rounded-xl font-bold">Empezar</motion.button>
                            </div>
                        </motion.div>
                    </div>
                    <div className="w-full sm:w-2/4">
                        <motion.div initial={{opacity:0,x:-200}} animate={{opacity:1, x:0}} transition={{duration:1.0}} className="mx-auto">
                            <img className="mx-auto" src={iphoneImg} width="300" height="300" alt="" />

                        </motion.div>

                        <div  className="flex justify-center sm:hidden mt-10">
                                <motion.button initial={{opacity:0,y:400}} animate={{opacity:1,y:0}} id="btn-empezar" className="p-2 mt-3 bg-white shadow-2xl w-80 focus:outline-none border-2 border-green-600 rounded-xl font-bold">Empezar</motion.button>
                        </div>
                    </div>
                </div>

                <div className="mt-20">{process.env.REACT_APP_NAME_USER?process.env.REACT_APP_NAME_USER:''}</div>
                <div className="mt-20">{process.env.REACT_APP_NAME_USER2?process.env.REACT_APP_NAME_USER2:'no existe varible env3'}</div>
                <div className="mt-20">{process.env.REACT_APP_NAME_USER3?process.env.REACT_APP_NAME_USER2:'no existe varible env3'}</div>
            </section>

            <section id="section-como-funciona" className=" h-auto  pb-10 pt-24">
                <div>
                    {/* <div className="figura"></div> */}
                    <div className="mb-20">
                        <h1 className="text-3xl text-white mx-1 sm:mx-20 font-bold">NuxtBo es una nueva forma de vender productos en linea y recibir los pedidos en tu Whatsapp</h1>
                    </div>
                    <div className=" grid grid-cols-1 lg:grid-cols-3 gap-14 sm:gap-3 p-3 w-full h-auto ">
                        <div className="rounded-lg shadow-2xl   relative  w-full h-full">
                            <div className="mt-14 ml-5 text-left">
                                <ul className="font-semibold" >
                                    <li className="text-white"> ✔️ Crea tu catalogo o tienda de productos en linea y Comienza a subir la lista de tus productos</li>
                                </ul>
                            </div>
                            <img src={subirCatalogos} alt="" className="h-auto w-auto my-auto" />
                            <motion.span id="btn-step" animate={{rotate:360}} transition={{repeat:Infinity, repeatDelay:2}} className="absolute shadow-2xl top-0 left-0  text-white p-2 rounded-xl">Paso 1</motion.span>
                        </div>
                        <div className="relative rounded-lg shadow-2xl mb-10  w-full h-full">
                            <div className="mt-14 ml-5 text-left">
                                <ul className="font-semibold" >
                                    <li className="text-white">✔️ El cliente selecciona los productos de su interes.</li>
                                </ul>
                            </div>
                            <img src={imgLaptopAndImage} alt="" className="h-50 w-auto pt-4 px-10 sm:px-20 my-auto" />
                            <motion.span id="btn-step" animate={{rotate:360}} transition={{repeat:Infinity, repeatDelay:2.5}} className="absolute shadow-2xl top-0 left-0  text-white p-2 rounded-xl">Paso 2</motion.span>
                        </div>
                        <div className="relative rounded-lg shadow-2xl  w-full h-full">
                            <div className="mt-14 ml-5 text-left mb-4">
                                <ul className="font-semibold" >
                                    <li className="text-white">✔️ Los pedidos tus clientes te llegan a tu Whatsapp, a ti como dueño de la tienda en linea</li>
                                </ul>
                            </div>
                            <img src={imgMobileOwner} alt="" className="h-80 w-auto mx-auto my-auto" />
                            <motion.span id="btn-step" animate={{rotate:360}} transition={{repeat:Infinity, repeatDelay:3}} className="absolute shadow-2xl top-0 left-0  text-white p-2 rounded-xl ">Paso 3</motion.span>
                        </div>
                    </div>
                </div>
            </section>

            <section id="section-video" className=" h-auto">
                <div className="w-full h-auto py-20">
                    <div>
                        <h2 className="text-4xl font-extrabold text-white" >¿Como funciona NuxtBo?</h2>
                    </div>
                    <div className="">
                        <iframe className="mx-auto" width="660" height="415" src="https://www.youtube.com/embed/sX5hzEMMQAI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                        </iframe>
                    </div>
                </div>
            </section>

            <section className="bg-red-600 h-auto">
                <div className="bg-gray-500 w-full text-left">
                    <div className="flex flex-rows-1">this a precious</div>
                    <div className="flex flex-rows-1">this a precious</div>
                    <div className="flex flex-rows-1">this a precious</div>
                    <div className="flex flex-rows-1">this a precious</div>
                </div>
            </section>
        </div>
    )
}


export default BodyContent;