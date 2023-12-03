const VisiMisi = () => {
    return (
        <div id="visi-misi" className="py-14 px-20 space-y-14">
            <div className="text-center text-primary space-y-3">
                <h1 className="text-4xl font-bold underline decoration-2 underline-offset-8">Visi
                    & Misi</h1>
                <p className="text-center text-black/50">Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                    Consequatur facilis itaque non odio pariatur repellendus totam!</p>
            </div>

            <div className="grid grid-cols-2 gap-14 items-center">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold text-primary">Visi</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur
                        blanditiis
                        consectetur cupiditate delectus dolor dolorem doloremque eaque, error est illum in
                        molestias mollitia neque officiis omnis pariatur repudiandae tenetur?</p>
                </div>
                <div className="bg-[url('/hero-bg.jpeg')] bg-cover w-full h-96 rounded-lg"/>
            </div>
            <div className="grid grid-cols-2 gap-14 items-center">
                <div className="bg-[url('/hero-bg.jpeg')] bg-cover w-full h-96 rounded-lg"/>
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold text-primary">Misi</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur
                        blanditiis
                        consectetur cupiditate delectus dolor dolorem doloremque eaque, error est illum in
                        molestias mollitia neque officiis omnis pariatur repudiandae tenetur?</p>
                </div>
            </div>
        </div>
    )
}

export default VisiMisi