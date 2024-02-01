

export default function Home() {
    return (
        <section className="bg-black h-screen flex flex-col">

            <section className="h-87%  flex flex-row">
                <div className="flex-grow  flex flex-col">
                    <div className=" flex-grow px-1 py-1">
                        <div className="bg-custom-color h-full rounded-lg">

                        </div>
                    </div>
                    <div className="h-70%  px-1 py-1">
                        <div className="bg-custom-color h-full rounded-lg">

                        </div>
                    </div>
                </div>
                <div className="w-73%  px-1 py-1">
                    <div className="bg-custom-color h-full rounded-lg">

                    </div>
                </div>

            </section>
            <section className=" flex-grow flex flex-row  items-center px-5 justify-between bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 my-1 mx-1" >
                <div>
                    <p className="text-white font-medium">
                        Preview of spotify
                    </p>
                    <p className="text-white">
                        Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed
                    </p>
                </div>
                <button type="button" className="h-12 bg-white font-bold px-6 rounded-full">
                        Sign up free
                </button>
            </section>
        </section>
    )
}