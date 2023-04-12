import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';



const Statistics = () => {

    const data = [
        {
            name: 'Assi-1',
            uv: 60,

        },
        {
            name: 'Assi-2',
            uv: 59,
        },
        {
            name: 'Assi-3',
            uv: 60,
        },
        {
            name: 'Assi-4',
            uv: 58,
        },
        {
            name: 'Assi-5',
            uv: 54,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Assi-6',
            uv: 55,
           
        },
        {
            name: 'Assi-7',
            uv: 60,
           
        },
    ];
    return (
        <div className='mt-5 mt-5 mx-5 ps-5'>
                <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
        </div>
    );
};

export default Statistics;