import {Badge} from "@/components/ui/badge";

const Galeri = () => {
    return (
        <div id="galeri" className="py-14 px-20 space-y-14">
            <div className="text-center text-primary space-y-3">
                <h1 className="text-4xl font-bold underline decoration-2 underline-offset-8">Galeri</h1>
                <p className="text-center text-black/50">Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                    Consequatur facilis itaque non odio pariatur repellendus totam!</p>
            </div>
            <div className="grid grid-cols-3 gap-10">
                <div
                    className="cursor-pointer hover:scale-110 transition bg-[url('/hero-bg.jpeg')] h-96 rounded-lg w-full bg-cover relative">
                    <Badge className="absolute bottom-5 right-5">Foto</Badge>
                </div>
                <div
                    className="cursor-pointer hover:scale-110 transition bg-[url('/hero-bg.jpeg')] h-96 rounded-lg w-full bg-cover relative">
                    <Badge className="absolute bottom-5 right-5">Foto</Badge>
                </div>
                <div
                    className="cursor-pointer hover:scale-110 transition bg-[url('/hero-bg.jpeg')] h-96 rounded-lg w-full bg-cover relative">
                    <Badge className="absolute bottom-5 right-5">Video</Badge>
                </div>
                <div
                    className="cursor-pointer hover:scale-110 transition bg-[url('/hero-bg.jpeg')] h-96 rounded-lg w-full bg-cover relative">
                    <Badge className="absolute bottom-5 right-5">Video</Badge>
                </div>
                <div
                    className="cursor-pointer hover:scale-110 transition bg-[url('/hero-bg.jpeg')] h-96 rounded-lg w-full bg-cover relative">
                    <Badge className="absolute bottom-5 right-5">Foto</Badge>
                </div>
                <div
                    className="cursor-pointer hover:scale-110 transition bg-[url('/hero-bg.jpeg')] h-96 rounded-lg w-full bg-cover relative">
                    <Badge className="absolute bottom-5 right-5">Video</Badge>
                </div>
                <div
                    className="cursor-pointer hover:scale-110 transition bg-[url('/hero-bg.jpeg')] h-96 rounded-lg w-full bg-cover relative">
                    <Badge className="absolute bottom-5 right-5">Foto</Badge>
                </div>
                <div
                    className="cursor-pointer hover:scale-110 transition bg-[url('/hero-bg.jpeg')] h-96 rounded-lg w-full bg-cover relative">
                    <Badge className="absolute bottom-5 right-5">Video</Badge>
                </div>
                <div
                    className="cursor-pointer hover:scale-110 transition bg-[url('/hero-bg.jpeg')] h-96 rounded-lg w-full bg-cover relative">
                    <Badge className="absolute bottom-5 right-5">Foto</Badge>
                </div>
            </div>
        </div>
    )
}

export default Galeri