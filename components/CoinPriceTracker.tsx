const CoinPriceTracker = () => {
    return (
        <div className="py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <h2 className="mb-8 text-center text-white text-2xl font-bold md:mb-12 lg:text-3xl">Exchange Rates</h2>

                <div className="grid gap-3 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-3">
                    <div>
                        <a href="#" className="group relative flex h-52 items-end overflow-hidden rounded-lg bg-black p-4 shadow-lg">
                            <img src="./bitcoin.png" loading="lazy" alt="Photo by engin akyurt" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                            <div className="relative flex w-full flex-col rounded-lg p-4 text-center">
                                <span className="text-black">Bitcoin</span>
                                <span className="text-lg font-bold text-gray-800 lg:text-xl">24000$</span>
                            </div>
                        </a>
                    </div>

                    <div>
                        <a href="#" className="group relative flex h-52 items-end overflow-hidden rounded-lg bg-black p-4 shadow-lg">
                            <img src="./ethereum-logo.png" loading="lazy" alt="Photo by Austin Wade" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                            <div className="relative flex w-full flex-col rounded-lg p-4 text-center">
                                <span className="text-black">Ethereum</span>
                                <span className="text-lg font-bold text-gray-800 lg:text-xl">1600$</span>
                            </div>
                        </a>
                    </div>

                    <div>
                        <a href="#" className="group relative flex h-52 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                            <img src="./sol.png" loading="lazy" alt="Photo by Austin Wade" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                            <div className="relative flex w-full flex-col rounded-lg p-4 text-center">
                                <span className="text-black">SOL</span>
                                <span className="text-lg font-bold text-gray-800 lg:text-xl">18$</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoinPriceTracker;