import disney from "../assets/images/disney.jpg";
import wb from "../assets/images/WB-movies.jpg";
const AdsPage = () => {
    return (
        <div className="max-w-7xl mx-auto my-40">
            <div className="flex flex-col md:flex-row lg:justify-around mx-2 gap-5">
                <img className="w-full md:w-[350px] lg:w-[480px] xl:w-[580px]" src={disney} alt="" />
                <img className="w-full md:w-[350px] lg:w-[480px] xl:w-[580px]" src={wb} alt="" />
            </div>
        </div>
    );
};

export default AdsPage;