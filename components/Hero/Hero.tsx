
const HomeHero = () =>{
    return(
            <div className="self-stretch flex flex-col justify-between items-center">
              
                <div className="self-center flex flex-col justify-between gap-40 w-3/5 mt-20 mb-20">
                  <div className="mx-auto flex max-w-xl flex-col items-center text-center">
                    <div className="self-stretch relative flex flex-col items-center pb-16">
                      <div
                        className="text-center text-6xl font-['DM_Sans'] font-bold tracking-[-1] leading-[86px] text-white relative w-full"
                      >
                        Digital Solutions for the Future
                      </div>
                    </div>

                    <div className="bg-[linear-gradient(270deg,_#10e9a2_0%,#429fd6_50%,#9749fb_100%)] mt-40 mb-20 bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col justify-center h-16 shrink-0 items-center rounded-[100px]">
                      <button
                        id="SignUp"
                        className="text-center text-lg font-['DM_Sans'] font-medium leading-[26px] text-white mx-20"
                      >
                        Let’s Meet!
                      </button>
                    </div>
                  </div>
                </div>
            </div>
    )
}

export default HomeHero