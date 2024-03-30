

const Banner = () => {
    return (
        <div className='max-w-100'>
            <div className="hero md:min-h-[620px]" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1505775561242-727b7fba20f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content p-10 text-center text-neutral-content">
                    <div className="max-w-2xl text-white">
                        <h1 className="mb-4 text-3xl font-bold">Welcome to Media Marvels - Your Gateway to Entertainment Extravaganza!</h1>
                        <p className="mb-8 text-xl text-justify">
                            Embark on a thrilling journey into the world of entertainment and media with Media Marvels. Immerse yourself in the captivating realms of streaming giants like Netflix, the magical universe of Disney, and the cinematic wonders of Warner Bros. Our single-page web application is your one-stop destination for all things entertainment.
                        </p>
                        <button className="bg-transparent hover:bg-white text-white font-bold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded-xl text-xl duration-200 hover:italic">Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;