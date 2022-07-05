import React from "react";
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";


function NFTDropPage() {
    return <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
        {/* Izquierdo */}
        <div className="lg:col-span-4 bg-gradient-to-br from-cyan-800 to-rose-500">
            <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
                <div className="rounded-xl bg-gradient-to-br from-yellow-400 to-purple-600 p-2">
                <img className="w-44 rounded-xl object-cover lg:h-96 lg:w-72" src="https://cdn.sanity.io/images/9ep8u6nk/production/ee298e2fb78803f3226dcde22f1f2a8d69f56fad-600x600.png" alt="ape" />
                </div>
                <div className="space-y-2 p-5 text-center ">
                    <h1 className="text-4xl font-bold text-white">Monos</h1>
                    <h2 className="text-xl text-grey-300">Una colección de monos que viven y respiran REACT</h2>
                </div>
            </div>
        </div>
        {/* Derecho */}
    <div className="flex flex-1 flex-col p-12 lg:col-span-6">
        {/* header */}
            <header className="flex items-center justify-between">
                <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80"> Market place <span className="font-extrabold underline decoration-pink-600/50"> Gaby </span> de NFT</h1>
                <button className="rounded-full bg-rose-400 text-white p-4 text-xs font-bold lg:px-5 lg:px-3 lg:text-base hover:bg-red-300 hover:text-black">Regístrate</button>
            </header>

            <hr className="my-2 border" />
        {/* contenido */}
            <div className="mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:space-y-0 lg:justify-center">
                <img className="w-80 object-cover pb-10 lg:h-40" src="https://cdn.sanity.io/images/9ep8u6nk/production/f72570921cab407c11a39c8e1717f5607718e14d-2951x2430.webp" alt="" />
            <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold">El club de coding de monos | NFT Drop</h1>
            <p className="pt-2 text-xl text-green-500 ">13/21 NFT's tomadas</p>
            </div>
        {/* boton */}
        <button className="h-16 w-full rounded-full bg-red-400 text-white font-bold hover:bg-red-300 hover:text-black">Comprar NFT (0.01 ETH)</button>
    </div>
    </div>
}

export default NFTDropPage