import {Button} from "@/components/ui/button";

const Hero = () => {
    return (
        <div
            className={`w-full flex-grow bg-[url('/images/hero.jpeg')] bg-cover`}>
            <div className="w-full h-full backdrop-brightness-50 flex justify-center items-center">
                <div className="text-center w-1/2 space-y-3">
                    <h1 className="text-5xl font-extrabold text-white">PKK KELURAHAN BERKOH</h1>
                    <p className="text-white">Website utama PKK (Pemberdayaan Kesejahteraan Keluarga) daerah kelurahan
                        Berkoh, Kecamatan Purwokerto Selatan, Banyumas, Jawa Tengah.</p>
                    <a href="#visi-misi" className="block">
                        <Button size="lg">
                            Visi Misi
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Hero;