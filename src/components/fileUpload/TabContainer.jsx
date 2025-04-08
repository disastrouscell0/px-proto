'use client'

import React, { useState } from 'react';

const TabContainer = ({ onParseCSV }) => {
    const [year, setYear] = useState(1);

    return (
        <>
        <p className=''>1. Upload CSV file here.</p>
        <ul className="flex gap-2 px-3 py-2 *: *:px-2 *:rounded-md">
            <li><button onClick={() => setYear(1)}
                        className={`px-2 rounded-md hover:cursor-pointer
                        ${year === 1 ? "bg-slate-100" : "bg-slate-200"}`}>Year 1</button></li>
            <li><button onClick={() => setYear(2)}
                        className={`px-2 rounded-md hover:cursor-pointer
                        ${year === 2 ? "bg-slate-100" : "bg-slate-200"}`}>Year 2</button></li>
            <li><button onClick={() => setYear(3)}
                        className={`px-2 rounded-md hover:cursor-pointer
                        ${year === 3 ? "bg-slate-100" : "bg-slate-200"}`}>Year 3</button></li>
        </ul>
        <div className="content py-3.5 px-3 rounded-xl outline-1 outline-slate-400">
            <div className="p-1">Year {year} file:</div>
            <input
                type="file"
                id="CSV file"
                accept=".csv"
                className="text-sm text-grey-500
                            file:mr-5 file:py-2
                            file:px-6 file:rounded-full
                            file:border-0 file:text-sm
                            file:font-medium file:text-blue-700
                            file:bg-slate-300 hover:file:cursor-pointer"
                onChange={async (e) => {
                    const file = e.target.files?.[0]
                    if(!file) return;

                    const data = new FormData();
                    data.set("file", file);

                    const response = await fetch("/api/parseCSV", {
                        method: "POST",
                        body: data,
                    });

                    const parsedCSV = await response.json();
                    const csvData = JSON.parse(parsedCSV);
                    csvData.year = year;
                    console.log(`${JSON.stringify(csvData)}`)

                    onParseCSV( csvData );
                }}   
            />
        </div>
        </>
    );
}
 
export default TabContainer;