import React from 'react'

function Rates() {
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card  glasscard flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <table className="table-fixed ">
                                <thead>
                                    <tr>
                                        <th className="w-1/2 px-4 py-2">Currency</th>
                                        <th className="w-1/4 px-4 py-2">Rate (usd)</th>
                                        <th className="w-1/4 px-4 py-2">Gain/loss</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border px-4 py-2"> Bitcoin (BTC)</td>
                                        <td className="border px-4 py-2">17161.22 </td>
                                        <td className="border px-4 py-2">1.41%</td>
                                    </tr>
                                    <tr >
                                        <td className="border px-4 py-2"> Ethereum (ETH)</td>
                                        <td className="border px-4 py-2">1 265.59</td>
                                        <td className="border px-4 py-2">1.57%</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">Tether (USDT)</td>
                                        <td className="border px-4 py-2">1.00</td>
                                        <td className="border px-4 py-2">-0.01%</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">BNB (BNB)</td>
                                        <td className="border px-4 py-2">262.97 </td>
                                        <td className="border px-4 py-2">-6.43%</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">USD Coin (USDC)</td>
                                        <td className="border px-4 py-2">0.999</td>
                                        <td className="border px-4 py-2">-0.14%</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Rates