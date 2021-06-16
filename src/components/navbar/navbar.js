import React from 'react';

const Navbar =()=>{

    return(
        <div className=" fixed bg-white bg-opacity-75 h-16 w-screen px-0 lg:px-10">
            <div className="flex justify-between h-full  my-auto">
                <div className="flex flex-row ml-0 lg:ml-10">
                    <div className="my-auto">
                        <h1 className="font-bold mx-10 text-xl text-green-500 ">NuxtBo</h1>
                    </div>
                    {/* <div className="hidden sm:flex my-auto flex flex-row">
                        <li>1</li>
                        <li>2</li>
                        <li>333</li>
                        <li>4444</li>
                        <li>5555</li>
                    </div> */}
                </div>
                <div className="flex  mr-2 md:mr-16">
                    <div className="my-auto p-2 px-3 bg-green-400 text-white font-semibold rounded-xl cursor-pointer">
                        Ver más formación
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Navbar;