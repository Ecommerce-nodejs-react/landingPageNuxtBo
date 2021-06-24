import React from 'react';

import './navbar.css';


const Navbar =()=>{

    return(
        <div className="h-16  ">
            
                    <div className="flex flex-rows-1 justify-center pt-8">
                        <h1 id="title-navbar " className="font-extrabold text-5xl ">NuxtBo  </h1>
                        <div className="my-auto justify-content text-3xl">👍</div>
                    </div>
        
        </div>
    );
}


export default Navbar;