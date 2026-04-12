import {Icon } from '@iconify/react'

export function Home (){
    return <div className="min-h screen flex flex-col p-4">

        <div className="flex justify-between items-center mb-4">
        <h1 className="font-bold text-2xl text-cyan-500">Hi, Jumplover! </h1>
        <img src="/jumprope.png" alt="imageprofile" className="rounded-full w-20 h-20"/>
        </div>

        <nav className="fixed bottom-0 left-0 right-0 flex justify-around items-center p-4 border-t-3 border-gray-500">

            <button>🏠</button>
            <button>➕</button>
            <button>👤</button>
            <button>🚪</button>

        </nav>
    </div>
}