import Navbar from "@/components/navbar";
import Hero from "@/app/(main)/hero";
import VisiMisi from "@/app/(main)/visi-misi";
import Galeri from "@/app/(main)/galeri";
import Footer from "@/app/(main)/footer";

const Home = () => {
    return (
        <div>
            <div className="h-screen flex flex-col">
                <Navbar/>
                <Hero/>
            </div>
            <VisiMisi/>
            <Galeri/>
            <Footer/>
        </div>
    )
}

export default Home