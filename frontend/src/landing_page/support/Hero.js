import React from "react";

function Hero() {
    return (
        <section className="container-fluid" id="supportHero" style={{ backgroundColor: "#387ed1" }}>
            <div className="p-3 text-white" id="supportWrapper" style={{ display: "flex", justifyContent: "space-around" }}>
                <h4>Support Portal</h4>
                <a href="" className="text-white">Track tickets</a>
            </div>
            <div className="row p-2 m-1">
                <div className="col-6 p-5 text-white">
                    <h1 className="fs-3">
                        Search for an answer or browse help topics to create a ticket
                    </h1>
                    <input
                        placeholder="Eg: how do I activate F&O, why is my order getting rejected..."
                        style={{ width: "40vw", height: "7vh", borderRadius: "6px", margin: "10px 0 10px 0" }}
                    />
                    <br />
                    <a href="" className="text-white p-3">Track account opening</a>
                    <a href="" className="text-white p-3">Track segment activation</a>
                    <a href="" className="text-white p-3">Intraday margins</a>
                    <a href="" className="text-white p-3">Kite user manual</a>
                </div>
                <div className="col-6 p-5 text-white">
                    <h1 className="fs-3">Featured</h1>
                    <ol>
                        <li>
                            <a href="" className="text-white">MCX Option contracts expiry - April 2025</a>
                        </li>
                        <li>
                            <a href="" className="text-white">MCX Base metals contract expiry - April 2025</a>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Hero;
