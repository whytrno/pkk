const Hero = ({img, title, description}) => {
    return (
        <div
            className={`w-full flex-grow h-[80vh] bg-cover`}
            style={{backgroundImage: `url('/images/${img}')`}}
        >
            <div className="w-full h-full backdrop-brightness-50 flex justify-center items-center">
                <div className="text-center w-1/2 space-y-3">
                    <h1 className="text-5xl font-extrabold text-white">{title}</h1>
                    <p className="text-white">{description}</p>
                    {/*<a href="#visi-misi" className="block">*/}
                    {/*    <Button size="lg">*/}
                    {/*        Visi Misi*/}
                    {/*    </Button>*/}
                    {/*</a>*/}
                </div>
            </div>
        </div>
    );
}

export default Hero;