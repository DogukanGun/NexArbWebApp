
const HomeHero = () => {
  return (
    <div className="self-stretch flex flex-col justify-between items-center">
      <div className="self-center flex flex-col justify-between gap-40 w-3/5 mt-20 mb-20">
        <div className="flex flex-col gap-8 items-center">
          <div className="self-stretch relative flex flex-col items-center pb-16">
            <div className="text-center text-xl font-['DM_Sans'] font-medium leading-[32px] text-white absolute mt-32 left-0 h-24 w-full">
              Startup Framework gives you complete freedom over your
              creative process — you don’t have to think about any technical
              aspects. There are no limits and absolutely no coding.{" "}
            </div>
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