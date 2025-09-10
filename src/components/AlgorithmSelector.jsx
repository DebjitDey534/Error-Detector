import React, { useEffect, useState } from 'react'

const AlgorithmSelector = () => {
    const [selected, setSelected] = useState("Parity");
    const [description,setdescription]=useState("");
    useEffect(()=>{
        if(selected==='Parity')
        {
            setdescription("Parity is a simple error detection method that adds an extra bit to data to make the number of 1s either even (even parity) or odd (odd parity). At the receiver, this bit is checked to detect if any errors occurred during transmission. It can detect single-bit errors but cannot correct them or reliably detect multiple-bit errors.");
        }

        else if(selected==='Checksum')
        {
            setdescription("A checksum is an error detection method where the sender adds a value calculated from the data bits. The receiver recalculates this value and compares it with the sent checksum to detect errors. It can detect multiple errors but cannot always correct them.");
        }
        else if(selected==='HammingCode')
        {
            setdescription("Hamming code is an error detection and correction method that adds multiple parity bits to data. It can detect and correct single-bit errors and detect two-bit errors, making it more reliable than simple parity.");
        }
    },[selected])

    return (
        <div className='bg-violet-400 h-[25vh] w-[60vw] sm:h-[55vh] sm:w-[30vw] rounded-2xl overflow-y-scroll scrollbar-hide '>
            <div className="flex flex-col gap-4 text-lg px-8 my-9">
                <label className="flex items-center gap-2  text-white ">
                    <input
                        type="radio"
                        name="Algo"
                        value="Parity"
                        checked={selected === "Parity"}
                        onChange={(e) => setSelected(e.target.value)}
                    />
                    <span>Parity</span>
                </label>

                <label className="flex items-center gap-2 text-white ">
                    <input
                        type="radio"
                        name="Algo"
                        value="Checksum"
                        checked={selected === "Checksum"}
                        onChange={(e) => setSelected(e.target.value)}
                    />
                    <span>Checksum</span>
                </label>

                <label className="flex items-center gap-2 text-white ">
                    <input
                        type="radio"
                        name="Algo"
                        value="HammingCode"
                        checked={selected === "HammingCode"}
                        onChange={(e) => setSelected(e.target.value)}
                    />
                    <span>Hamming Code</span>
                </label>
            </div>
            <div className='m-3 text-white'>
                {description}
            </div>

        </div>
    )
}

export default AlgorithmSelector
