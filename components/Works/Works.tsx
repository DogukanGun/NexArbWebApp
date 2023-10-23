const HomeWorks = () => {
  return (
    <div className="flex flex-col gap-20 items-center mb-8 mx-[171px]">
      <div className="mx-auto flex max-w-xl flex-col items-center text-center">
        <div
          id="OurWorks"
          className="text-center text-4xl font-['DM_Sans'] font-bold tracking-[-0.4] leading-[52px] text-white"
        >
          Our Works
        </div>
        <div
          id="TheMostImportantP1"
          className="text-center text-xl font-['DM_Sans'] font-medium leading-[32px] text-white self-start w-full"
        >
          The most important part of the Startup Framework is the samples. The
          samples form a set of 20 usable pages you can use as is or you can add
          new blocks from UI Kit.
        </div>
      </div>
        <div className="mx-auto flex max-w-xl flex-col items-center text-center">
          <video className="w-full" controls>
            <source src="/docs/videos/flowbite.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
    </div>
  )
}

export default HomeWorks