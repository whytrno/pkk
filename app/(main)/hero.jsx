import {Button} from "@/components/ui/button";

const Hero = () => {
    return (
        <div
            className={`w-full flex-grow bg-[url('/hero-bg.jpeg')] bg-cover`}>
            <div className="w-full h-full backdrop-brightness-50 flex justify-center items-center">
                <div className="text-center w-1/2 space-y-3">
                    <h1 className="text-5xl font-extrabold text-white">Lorem ipsum dolor sit
                        amet</h1>
                    <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Beatae
                        deserunt dignissimos,
                        eveniet hic modi non odit sint veniam! Doloribus ducimus eos nam rem sapiente tempora
                        voluptas? Amet harum iure neque.</p>
                    <Button size="lg">Lorem Ipsum</Button>
                </div>
            </div>
        </div>
    );
}

export default Hero;