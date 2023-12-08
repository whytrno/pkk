import {Badge} from "@/components/ui/badge";

const images = [
    {
        src: "1.jpeg",
        type: "Foto"
    },
    {
        src: "2.jpeg",
        type: "Foto"
    },
    {
        src: "3.jpeg",
        type: "Foto"
    },
    {
        src: "4.jpeg",
        type: "Foto"
    },
    {
        src: "5.jpeg",
        type: "Foto"
    },
    {
        src: "6.jpeg",
        type: "Foto"
    },
    {
        src: "7.jpeg",
        type: "Foto"
    },
    {
        src: "8.jpeg",
        type: "Foto"
    },
    {
        src: "9.jpeg",
        type: "Foto"
    },
    {
        src: "10.jpeg",
        type: "Foto"
    },
    {
        src: "11.jpeg",
        type: "Foto"
    },
]
const Galeri = () => {
    return (
        <div id="galeri" className="py-14 px-20 space-y-14">
            <div className="text-center text-primary space-y-3">
                <h1 className="text-4xl font-bold underline decoration-2 underline-offset-8">Galeri</h1>
                {/*<p className="text-center text-black/50">Lorem ipsum dolor sit amet, consectetur adipisicing*/}
                {/*    elit.*/}
                {/*    Consequatur facilis itaque non odio pariatur repellendus totam!</p>*/}
            </div>
            <div className="grid grid-cols-3 gap-10">
                {images.map((image, index) => (
                    <div
                        key={index}
                        // className={`cursor-pointer hover:scale-110 transition bg-[url('/images/${image.src}')] h-96 rounded-lg w-full bg-cover relative`}
                        className={`cursor-pointer hover:scale-110 transition h-96 rounded-lg w-full bg-cover relative`}
                        style={{backgroundImage: `url('/images/${image.src}')`}}

                    >
                        <Badge className="absolute bottom-5 right-5">{image.type}</Badge>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Galeri