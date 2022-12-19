import React from 'react'
import Rates from '../Rates';

function Home() {
    return (
        <>
            <div className="hero min-h-screen " style={{ backgroundImage: `url("./img/bg2.png")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md text-white">
                        <h1 className="mb-5 text-5xl font-bold">WELCOME TO </h1>
                        <h1 className="mb-5 text-5xl font-bold">UTOPIA</h1>
                        <p className="mb-5">Utopia is a hypothetical or imaginary place or state of things in which everything is perfect. </p>
                        <button className="button-49" role="button">Mint Your NFT</button>
                    </div>
                </div>
            </div>
            <Rates />
        </>
    )
}

export default Home;