import Image from "next/image";

const Struktur = () => {
    return (
        <div id="struktur" className="py-14 px-20 space-y-14">
            <div className="text-center text-primary space-y-3">
                <h1 className="text-4xl font-bold underline decoration-2 underline-offset-8">Struktur Organisasi</h1>
                {/*<p className="text-center text-black/50">Lorem ipsum dolor sit amet, consectetur adipisicing*/}
                {/*    elit.*/}
                {/*    Consequatur facilis itaque non odio pariatur repellendus totam!</p>*/}
            </div>
            <div className="relative h-[60rem] w-full rounded-xl">
                <Image src="/images/hero.jpeg" alt="Struktur Organisasi" fill className="object-cover rounded-xl"/>
            </div>
        </div>
    )
}

export default Struktur