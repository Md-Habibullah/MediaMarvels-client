import advertise1 from "../assets/images/slider1.jpg";
import advertise2 from "../assets/images/slider2.webp";
import advertise3 from "../assets/images/slider3.png";
const Slider = () => {
    return (
        <div className="max-w-7xl mx-auto mb-20">
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item h-[367px] relative w-full">
                    <img src={advertise1} className="w-full " />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a
                            href="#slide4"
                            className="btn btn-circle btn-outline text-red-600"
                        >
                            ❮
                        </a>
                        <a
                            href="#slide2"
                            className="btn btn-circle btn-outline text-red-600"
                        >
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item h-[367px] relative w-full">
                    <img src={advertise2} className="w-full " />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a
                            href="#slide1"
                            className="btn btn-circle btn-outline text-red-600"
                        >
                            ❮
                        </a>
                        <a
                            href="#slide3"
                            className="btn btn-circle btn-outline text-red-600"
                        >
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item h-[367px] relative w-full">
                    <img src={advertise3} className="w-full " />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a
                            href="#slide2"
                            className="btn btn-circle btn-outline text-red-600"
                        >
                            ❮
                        </a>
                        <a
                            href="#slide1"
                            className="btn btn-circle btn-outline text-red-600"
                        >
                            ❯
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
