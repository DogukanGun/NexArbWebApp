const HomeAbout = () =>{
    return(
        <div className="flex flex-col gap-20 w-2/3">
                <div className="flex flex-col gap-2 items-start ml-32 mr-24">
                  <div className="text-center text-4xl font-['DM_Sans'] font-bold tracking-[-0.4] leading-[52px] text-white ml-10">
                    About Nexarb
                  </div>
                  <div className="text-center font-['DM_Sans'] leading-[26px] text-white w-full">
                    Advantages include excellent sound quality, and the fact that they
                    do not require any batteries. Gamers often prefer wired headphones
                    so they never have to worry about batteries dying in the middle of
                    a heated match.
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-row gap-[291px] items-start mx-24">
                    <div
                      id="Fabriefcase"
                      className="text-center text-6xl font-['FontAwesome'] leading-[60px] text-[#4e9bd1] mr-1"
                    >
                      
                    </div>
                    <div
                      id="Facompress"
                      className="text-center text-6xl font-['FontAwesome'] leading-[60px] text-[#4e9bd1]"
                    >
                      
                    </div>
                    <div
                      id="Fadesktop"
                      className="text-center text-6xl font-['FontAwesome'] leading-[60px] text-[#4e9bd1]"
                    >
                      
                    </div>
                  </div>
                  <div className="flex flex-row gap-[147px] items-start mb-px ml-6 mr-[175px]">
                    <div
                      id="ManyUsefulCompone"
                      className="text-center text-xl font-['DM_Sans'] font-medium leading-[32px] text-white w-1/4"
                    >
                      Many Useful Components
                    </div>
                    <div
                      id="ResponsiveLayout"
                      className="text-center text-xl font-['DM_Sans'] font-medium leading-[32px] text-white mr-px w-1/4"
                    >
                      Responsive Layout
                    </div>
                    <div
                      id="RetinaReady"
                      className="text-center text-xl font-['DM_Sans'] font-medium leading-[32px] text-white"
                    >
                      Retina
                      <br />
                      Ready
                    </div>
                  </div>
                  <div className="flex flex-row justify-between items-start">
                    <div className="text-center font-['DM_Sans'] leading-[26px] text-white w-1/4">
                      Startup Framework contains components and complex blocks which
                      can easily be integrated into almost any design.{" "}
                    </div>
                    <div
                      id="WeHaventForgotten"
                      className="text-center font-['DM_Sans'] leading-[26px] text-white w-1/4"
                    >
                      We haven’t forgotten about responsive layout. With Startup
                      Framework, you can create a website with full mobile support.
                    </div>
                    <div className="text-center font-['DM_Sans'] leading-[26px] text-white w-1/4">
                      Startup Framework works on devices supporting Retina Display.
                      Feel the clarity in each pixel.
                    </div>
                  </div>
                </div>
              </div>
    )
}

export default HomeAbout