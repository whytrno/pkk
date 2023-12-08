const VisiMisi = () => {
    return (
        <div id="visi-misi" className="py-14 px-20 space-y-14">
            <div className="text-center text-primary space-y-3">
                <h1 className="text-4xl font-bold underline decoration-2 underline-offset-8">Visi
                    & Misi</h1>
                {/*<p className="text-center text-black/50">Lorem ipsum dolor sit amet, consectetur adipisicing*/}
                {/*    elit.*/}
                {/*    Consequatur facilis itaque non odio pariatur repellendus totam!</p>*/}
            </div>

            <div className="grid grid-cols-2 gap-14 items-center">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold text-primary">Visi</h1>
                    <p>Terwujudnya keluarga yang beriman, bertaqwa kepada Tuhan Yang Maha Esa, berakhlak mulia dan
                        berbudi luhur, sehat sejahtera lahir dan batin.</p>
                </div>
                <div className="bg-[url('/images/3.jpeg')] bg-cover w-full h-96 rounded-lg"/>
            </div>
            <div className="grid grid-cols-2 gap-14 items-center">
                <div className="bg-[url('/images/5.jpeg')] bg-cover w-full h-96 rounded-lg"/>
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold text-primary">Misi</h1>
                    <ul className="list-decimal list-inside">
                        <li>Meningkatkan pembentukan karakter keluarga melalui penghayatan, pengamalan pancasila,
                            kegotong royongan serta kesetaraan dan keadilan gender.
                        </li>
                        <li>Meningkatkan pendidikan daan ekonomi keluarga melalui berbagai upaya keterampilan dan
                            pengembangan koperasi.
                        </li>
                        <li>Meningkatkan Ketahanan Keluarga melalui pemenuhan pangan, sandang dan perumahan sehat dan
                            layak huni.
                        </li>
                        <li>Menigkatkan derajat kesehatan keluarga, kelestarian lingkungan hidup serta perencanaan
                            sehat.
                        </li>
                        <li>Meningkatkan pengelolaan Gerakan PKK meliputi kegiatan pengorganisasian dan peningkatan
                            Sumber Daya Manusia.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default VisiMisi