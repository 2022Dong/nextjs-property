import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InfoBoxes";
import HomeProperties from "@/components/HomeProperties";
import connectDB from "@/config/database";

const HomePage = () => {
    //console.log(process.env.MONGODB_URI);  // display result in terminal
    connectDB();
    return ( 
        <>
            <Hero />
            <InfoBoxes />
            <HomeProperties />
        </>
    );
}
 
export default HomePage;