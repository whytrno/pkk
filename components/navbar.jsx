import Image from "next/image";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center py-5 h-20 px-20">
            <div className="flex gap-5 items-center">
                <Image src="/images/logo.png" alt="Logo" height={60} width={60}/>
                <p className="text-3xl font-bold text-primary block">PKK Berkoh</p>
            </div>
            <div className="flex gap-10 items-center">
                {/*<h1 className="text-red-800">Jasa Teknologi</h1>*/}
                {/*<a href="#"*/}
                {/*   className="underline-offset-8 underline decoration-primary decoration-2 cursor-pointer">Tentang</a>*/}
                <a href="#"
                   className="hover:underline-offset-8 hover:underline hover:decoration-primary hover:decoration-2 cursor-pointer">Tentang</a>
                <a href="#visi-misi"
                   className="hover:underline-offset-8 hover:underline hover:decoration-primary hover:decoration-2 cursor-pointer">Visi
                    Misi</a>
                <a href="#struktur"
                   className="hover:underline-offset-8 hover:underline hover:decoration-primary hover:decoration-2 cursor-pointer">Struktur
                    Organisasi</a>
                <a href="#galeri"
                   className="hover:underline-offset-8 hover:underline hover:decoration-primary hover:decoration-2 cursor-pointer">Galeri</a>
            </div>
        </div>
    )
}

export default Navbar