import React,{useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import iphoneImg from '../../assets/iphoneSinNoch.png';
import subirCatalogos from '../../assets/subirCatalogos.png';
import imgLaptopAndImage from '../../assets/laptopAndMobile.png';
import imgMobileOwner from '../../assets/mobileOwner.png';
import './bodyContend.css'
import FormContactUs from '../contactUs/formContactUse/formContactUs';
import srcGif  from '../../assets/9012.gif'
import { Link } from 'react-router-dom';




const BodyContent =()=>{


    return(
        <div>
            <section id="section-1"  className=" w-full h-auto sm:h-full pb-20 " >


                {/* animacion de la burbuja green */}
                {/* <div id="esfersAmorfa" className=" h-60"></div> */}
                <div  id="p2" className="absolute  top-0 right-0 right-0"></div>

                <div className="flex flex-col sm:flex-row  justify-between">
                    <div className="w-full sm:w-2/4  mt-10 sm:mt-40  sm:mx-10">
                        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.6}} className="h-full font-bold">
                            <h1  className="text-gray-800 text-4xl sm:text-5xl font-black"><span id="text-online" className="text-green-400">Vende en linea</span>  y recibe los pedidos en tu <span id="text-online" className="text-green-500">Whatsapp</span> </h1>
                            <h2 className="text-gray-500 text-lg mt-4">Toma el control de tus ventas y obten 100% de tus ingresos</h2>
                            <h3 className="text-gray-500 text-lg">Crea tu catalogo de porductos o una tienda en linea</h3>
                            <div className="hidden sm:inline">
                              <Link to="/contactus/mensual">
                                <motion.button whileTap={{scale:0.97}}  initial={{opacity:0,y:-200}} animate={{opacity:1,y:0}} id="btn-empezar" className="p-2 mt-3 bg-white shadow-2xl w-60 focus:outline-none border-2 border-green-600 rounded-xl font-bold">
                                    Empezar
                                </motion.button>
                              </Link>
                            </div>
                        </motion.div>
                    </div>
                    <div className="w-full sm:w-2/4">
                        <motion.div id="content-demo" initial={{opacity:0,x:-200}} animate={{opacity:1, x:0}} transition={{duration:1.0}} className="mx-auto">
                            <div id="container">
                                <div id="content-img-demo">
                                    <img  className="mx-auto" src={iphoneImg} width="280" height="400" alt="" />
                                </div>
                                <img src={srcGif} className="mx-auto pt-4" width="258" height="400" alt="" />
                                {/* <video  className="mx-auto my-auto pt-5"  width="260" height="800"  autoPlay loop src={srcViddeo} /> */}
                            </div>
                        </motion.div>

                        <div  className="flex justify-center sm:hidden mt-10">
                        <Link to="/contactus">
                            <motion.div whileTap={{scale:0.97}} initial={{opacity:0,y:400}} animate={{opacity:1,y:0}} id="btn-empezar" className="p-2 mt-3 bg-white shadow-2xl w-80 focus:outline-none border-2 border-green-600 rounded-xl font-bold">
                                Empezar
                            </motion.div>
                        </Link>
                        </div>
                    </div>
                </div>

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
                            <img src={subirCatalogos} alt="" className=" mx-auto md:h-auto sm:w-10/12 md:w-9/12 lg:h-auto lg:w-auto my-auto" />
                            <motion.span id="btn-step" animate={{rotate:360}} transition={{repeat:Infinity, repeatDelay:2}} className="absolute shadow-2xl top-0 left-0  text-white p-2 rounded-xl">Paso 1</motion.span>
                        </div>
                        <div className="relative rounded-lg shadow-2xl mb-10  w-full h-full">
                            <div className="mt-14 ml-5 text-left">
                                <ul className="font-semibold" >
                                    <li className="text-white">✔️ El cliente selecciona los productos de su interes.</li>
                                </ul>
                            </div>
                            <img src={imgLaptopAndImage} alt="" className=" w-full sm:w-7/12 md:w-7/12 pt-4 px-10 lg:w-full lg:p-14 my-auto mx-auto" />
                            <motion.span id="btn-step" animate={{rotate:360}} transition={{repeat:Infinity, repeatDelay:2.5}} className="absolute shadow-2xl top-0 left-0  text-white p-2 rounded-xl">Paso 2</motion.span>
                        </div>
                        <div className="relative rounded-lg shadow-2xl  w-full h-full">
                            <div className="mt-14 ml-5 text-left mb-4">
                                <ul className="font-semibold" >
                                    <li className="text-white">✔️ Los pedidos de tus clientes te llegan a tu Whatsapp, a ti como dueño de la tienda en linea</li>
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
                    <div className="embed-container">
                        <iframe className="mx-auto" width="640" height="360" allowfullscreen="1"
                            src="https://www.youtube.com/embed/sX5hzEMMQAI" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            >
                        </iframe>
                    </div>
                </div>
            </section>

            <section id="section-pacing" className="section-pacing-1 relative bg-gray-00 pb-36">
                <div id="title-seccion-precing" className="text-white  font-bold text-4xl py-20">
                    Encuetra el plan adecuado para tu negocio
                </div>
                
                <div className="container   mx-auto bg-gray-00">

                <div id="contents-cards"  className=" w-full h-auto text-left">
                    
                   <div className="mx-auto pb-10">
                   <motion.div whileHover={{scale:1.01}} id="content-cart-precio" className="relative  w-80 mx-1 sm:mx-2 sm:w-72 lg:w-72  rounded-lg">
                        <div className="card">
                            <div className="content-card">
                                <div className="text-center mt-10">
                                    <div id="tile-precing" className="font-extrabold text-xl">Plan mensual</div>
                                        <div className="text-2xl pt-2 font-semibold text-blue-500">18 USD / month</div>
                                        <div>124 Bs / mes</div>
                                </div>
                                    <hr className="border border-b-1 border-green-500 my-5" />
                                    <div className="bg-gray-00 py-10">
                                        <div className="px-7">
                                                <ul className=" px-2 text-left">
                                                    <li>
                                                        Tienda en linea conectado a tu Whatsapp.
                                                    </li>
                                                    <li>
                                                        Interfaz de usuario adaptado a la web y dispositios moviles.
                                                    </li>
                                                    <li>
                                                        Sin limite de productos.
                                                    </li>
                                                    <li>
                                                        Incluye carrito de compras.
                                                    </li>
                                                </ul>
                                        </div>
                                    </div>
                                <div className="my-10">
                                <Link to="/contactus/plan-mensual">
                                    <motion.div whileTap={{scale:1.06}} whileHover={{scale:0.95}} className="rounded-full cursor-pointer border border-green-600 mx-8 text-center">
                                        Empezar
                                    </motion.div>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                   </div>

                     
                   <div className="mx-auto pb-10">
                   <motion.div whileHover={{scale:1.01}} id="content-cart-precio" className="relative  w-80 mx-1 sm:mx-2 sm:w-72 lg:w-72  rounded-lg">
                        <div className="card relative">
                            <div className="content-card">
                                <div className="text-center mt-10">
                                    <div id="tile-precing" className="font-extrabold text-xl">Plan anual</div>
                                        <div className="text-2xl pt-2 font-semibold text-blue-500">166 USD / year</div>
                                        <div>1152 Bs / anual</div>
                                </div>
                                    <hr className="border border-b-1 border-green-500 my-5" />
                                    <div className="bg-gray-00 py-10">
                                        <div className=" px-7">
                                                <ul className=" px-2 text-left">
                                                    <li>
                                                        Tienda en linea conectado a tu Whatsapp.
                                                    </li>
                                                    <li>
                                                        Interfaz de usuario adaptado a la web y dispositios moviles.
                                                    </li>
                                                    <li>
                                                        Nombre de dominio personaliado .com .shop...
                                                    </li>
                                                    <li>
                                                        Incluye carrito de compras.
                                                    </li>
                                                    <li>
                                                        Sin limite de productos.
                                                    </li>
                                                </ul>
                                                <div className="absolute text-green-300 top-0  text-xl font-bold">
                                                    Incluye 3 meses gratis
                                                </div>
                                        </div>
                                    </div>
                                <div className="my-10">
                                <Link to="/contactus/plan-anual">
                                    <motion.div whileTap={{scale:1.06}} whileHover={{scale:0.95}} className="rounded-full cursor-pointer border border-green-600 mx-8 text-center">
                                        Empezar
                                    </motion.div>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                   </div>

                      
                   <div className="mx-auto pb-10">
                   <motion.div whileHover={{scale:1.01}} 
                    animate={{scale:[1,1.02,1,1.02,1],}} 
                    transition={{duration:2,ease:"easeInOut", times:[0,0.2,0.5,0.8],repeatDelay:1, loop:Infinity}}
                    id="content-cart-precio" className="relative  w-80 mx-1 sm:mx-2 sm:w-72 lg:w-72  rounded-lg">
                        <div className="card card-promo">
                            <div className="content-card">
                                <div className="text-center mt-10">
                                    <div id="tile-precing" className="font-extrabold text-xl">Plan promo</div>
                                        <div className="text-2xl pt-2 font-semibold text-blue-500">12 USD / month</div>
                                        <div>80 Bs / mes</div>
                                </div>
                                    <hr className="border border-b-1 border-green-500 my-5" />
                                    <div className="bg-gray-00 py-10">
                                        <div className="px-7">
                                                <ul className=" px-2 text-left">
                                                    <li>
                                                        Tienda en linea conectado a tu Whatsapp.
                                                    </li>
                                                    <li>
                                                        Interfaz de usuario adaptado a la web y a dispositios moviles.
                                                    </li>
                                                    <li>
                                                        Sin limite de productos.
                                                    </li>
                                                    <li>
                                                        Incluye carrito de compras.
                                                    </li>
                                                </ul>
                                        </div>
                                    </div>
                                <div className="my-10">
                                <Link to="/contactus/plan-promo">
                                    <motion.div whileTap={{scale:1.06}} whileHover={{scale:0.95}} className="rounded-full cursor-pointer border border-green-700 mx-8 text-center">
                                        Empezar
                                    </motion.div>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                   </div>
             
                </div>
                </div>
            </section>

            <section>
     
            </section>

            {/* form contact us */}

            {/* <div id="container-model-contactus" className="fixed z-10  w-full h-full top-0 left-0 right-0 bottom-0"> */}
                {/* <FormContactUs></FormContactUs> */}
            {/* </div> */}
            {/* --------------- */}
        </div>
    )
}


export default BodyContent;