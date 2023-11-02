import React from 'react'

const EncounterBag = () => {
    return (
        <div className="border-[2px] border-[black] w-[30vw] lg:w-[300px] font-[PKMN]">
            <div className="p-4">Bag</div>
            <div className="border-t-[1px] border-[black] p-2">
                <div className="flex justify-around my-1">
                    <p>Poké Ball</p>
                    <p>x5</p>
                </div>
                <button className="bg-gray-300 py-1 px-8 rounded my-2 hover:bg-gray-900 hover:text-white">USE</button>
            </div>
            <div className="border-t-[1px] border-[black] p-2">
                <div className="flex justify-around my-1">
                    <p>Great Ball</p>
                    <p>x5</p>
                </div>
                <button className="bg-gray-300 py-1 px-8 rounded my-2 hover:bg-gray-900 hover:text-white">USE</button>
            </div>
            <div className="border-t-[1px] border-[black] p-2">
                <div className="flex justify-around my-1">
                    <p>Ultra Ball</p>
                    <p>x5</p>
                </div>
                <button className="bg-gray-300 py-1 px-8 rounded my-2 hover:bg-gray-900 hover:text-white">USE</button>
            </div>
            <div className="border-t-[1px] border-[black] p-2">
                <div className="flex justify-around my-1">
                    <p>Master Ball</p>
                    <p>x5</p>
                </div>
                <button className="bg-gray-300 py-1 px-8 rounded my-2 hover:bg-gray-900 hover:text-white">USE</button>
            </div>
            
        </div>
    )
}

export default EncounterBag