import React from 'react'

function Rates() {
    return (
        <>
            <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url("./img/bg2.png")` }}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left glasscard p-6 mx-8">
                        <div className="carousel w-full ">
                            <div id="slide1" className="carousel-item relative w-full">
                                <img src="https://placeimg.com/400/200/arch" className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide4" className="btn btn-circle">❮</a>
                                    <a href="#slide2" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide2" className="carousel-item relative w-full">
                                <img src="https://placeimg.com/400/200/arch" className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide1" className="btn btn-circle">❮</a>
                                    <a href="#slide3" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide3" className="carousel-item relative w-full">
                                <img src="https://placeimg.com/400/200/arch" className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide2" className="btn btn-circle">❮</a>
                                    <a href="#slide4" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide4" className="carousel-item relative w-full">
                                <img src="https://placeimg.com/800/200/arch" className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide3" className="btn btn-circle">❮</a>
                                    <a href="#slide1" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                        </div>
                        <div className='text-center p-6'>
                            <button className="btn btn-outline  ">Mint now!</button>

                            <p className="">More</p>
                        </div>
                    </div>
                    <div className="card  glasscard flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 text-black">
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