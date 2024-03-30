import AdsPage from "../Components/AdsPage";
import Banner from "../Components/Banner";
import BrandsSection from "../Components/BrandsSection";
import CategorySection from "../Components/CategorySection";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BrandsSection></BrandsSection>
            <CategorySection></CategorySection>
            <AdsPage></AdsPage>
        </div>
    );
};

export default Home;