const Statistic = () => {
    return (
        <div className="py-6 sm:py-8 lg:py-12 mt-10">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">

                <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0 md:divide-x">
                    <div className="flex flex-col items-center md:p-4">
                        <div className="text-xl font-bold sm:text-2xl md:text-3xl">5M+</div>
                        <div className="text-sm font-semibold sm:text-base">User worldwide</div>
                    </div>

                    <div className="flex flex-col items-center md:p-4">
                        <div className="text-xl font-bold sm:text-2xl md:text-3xl">120</div>
                        <div className="text-sm font-semibold sm:text-base">Country Supported</div>
                    </div>

                    <div className="flex flex-col items-center md:p-4">
                        <div className="text-xl font-boldsm:text-2xl md:text-3xl">43M+</div>
                        <div className="text-sm font-semibold sm:text-base">Crypto Transactions</div>
                    </div>

                    <div className="flex flex-col items-center md:p-4">
                        <div className="text-xl font-boldsm:text-2xl md:text-3xl">$470B</div>
                        <div className="text-sm font-semibold sm:text-base">Assets on Platform</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statistic