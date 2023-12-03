const Navbar = () => {
    return (
        <div className="flex justify-between items-center py-5 h-20 px-20">
            <p className="text-3xl font-bold text-primary block">PKK</p>
            <div className="flex gap-10 items-center">
                <a href="#"
                   className="underline-offset-8 underline decoration-primary decoration-2 cursor-pointer">Tentang</a>
                <a href="#visi-misi"
                   className="hover:underline-offset-8 hover:underline hover:decoration-primary hover:decoration-2 cursor-pointer">Visi
                    Misi</a>
                <a href="#galeri"
                   className="hover:underline-offset-8 hover:underline hover:decoration-primary hover:decoration-2 cursor-pointer">Galeri</a>
            </div>
        </div>
    )
}

export default Navbar