import React from 'react';
import {motion} from 'framer-motion';
import iphoneImg from '../../assets/iphone.png';
import subirCatalogos from '../../assets/subirCatalogos.png';
import imgLaptopAndImage from '../../assets/laptopAndMobile.png';
import imgMobileOwner from '../../assets/mobileOwner.png';
import './bodyContend.css'


const BodyContent =()=>{

    return(
        <div>
            <section className=" bg-white h-auto sm:h-screen " style={{zIndex:0}} >
                <div className="pt-16 flex flex-col sm:flex-row  justify-between">
                    <div className="w-full sm:w-2/4  mt-10 sm:mt-40 mx-1 sm:mx-10">
                        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.6}} className="h-full font-bold">
                            <h1 className="text-gray-800 text-4xl sm:text-5xl font-black"><span id="text-online" className="text-green-400">Vende en linea</span>  y recibe los pedidos en tu <span className="text-green-600">Whatsapp</span> </h1>
                            <h2 className="text-gray-500 mt-4">Toma el control de tus ventas y obten 100% de tus ingresos</h2>
                            <h3 className="text-gray-500">Crea tu catalo de porductos o tu tienda en linea</h3>
                            <div className="hidden sm:inline">
                                <button id="btn-empezar" className="p-2 mt-3 bg-white shadow-2xl w-60 focus:outline-none border-2 border-green-600 rounded-xl font-bold">Empezar</button>
                            </div>
                        </motion.div>
                    </div>
                    <div className="w-full sm:w-2/4">
                        <motion.div initial={{opacity:0,x:-200}} animate={{opacity:1, x:0}} transition={{duration:1.0}} className="mx-auto">
                            <img className="mx-auto" src={iphoneImg} width="300" height="300" alt="" />

                        </motion.div>
                        <div className="flex justify-center sm:hidden mt-10">
                                <button id="btn-empezar" className="p-2 mt-3 bg-white shadow-2xl w-80 focus:outline-none border-2 border-green-600 rounded-xl font-bold">Empezar</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white h-screen mt-20 pt-10">
                <div>
                    <div className="mb-10">
                        <h1 className="text-3xl mx-20 font-semibold">NuxtBo es una nueva forma de vender prodcutos en linea y recibir los pedidos en tu Whatsapp</h1>
                    </div>
                    <div className=" grid grid-cols-1 lg:grid-cols-3 gap-3 p-3 bg-white w-full h-auto ">
                        <div className="rounded-lg shadow-2xl  bg-white relative  w-full h-full">
                            <div>
                                <ul>
                                    <li>Crea tu tienda o catalogo de porductos</li>
                                    <li>Comienza a subir la lista de tus producto</li>
                                
                                </ul>
                            </div>
                            <img src={subirCatalogos} alt="" className="h-auto w-auto" />
                            <motion.span animate={{rotate:360}} transition={{repeat:Infinity, repeatDelay:2}} className="absolute shadow-2xl top-0 left-0  text-white p-2 rounded-xl bg-gradient-to-r from-green-400 to-blue-500">paso 1</motion.span>
                        </div>
                        <div className="relative bg-white rounded-lg shadow-2xl  w-full h-full">
                            <img src={imgLaptopAndImage} alt="" className="h-90 w-auto" />
                            <motion.span animate={{rotate:360}} transition={{repeat:Infinity, repeatDelay:2.5}} className="absolute shadow-2xl top-0 left-0  text-white p-2 rounded-xl bg-gradient-to-r from-green-400 to-blue-500">paso 2</motion.span>
                        </div>
                        <div className="relative bg-wgite rounded-lg shadow-2xl  w-full h-full">
                            <img src={imgMobileOwner} alt="" className="h-80 w-auto mx-auto" />
                            <motion.span animate={{rotate:360}} transition={{repeat:Infinity, repeatDelay:3}} className="absolute shadow-2xl top-0 left-0  text-white p-2 rounded-xl bg-gradient-to-r from-green-400 to-blue-500">paso 3</motion.span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-red-200 h-screen">

            </section>
            <section className="bg-indigo-200 h-screen">

            </section>
        </div>
    )
}


export default BodyContent;