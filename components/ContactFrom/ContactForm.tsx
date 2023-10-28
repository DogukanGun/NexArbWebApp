const ContactForm = () => {
  return (
    <div
      style={{ "background": "url('./contactbackground.png')" }}
      className="bg-white py-6 sm:py-8 lg:py-12"
    >
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mx-auto order-first h-full w-full bg-white rounded-lg p-10 my-auto sm:order-none sm:w-1/2 lg:w-3/5">
          <div className="flex flex-col gap-2 items-start mx-px">
            <div
              id="INPUTFIELD1"
              className="text-sm font-['DM_Sans'] font-bold tracking-[2] leading-[26px] uppercase text-[#1e0e62] ml-0 w-1/4"
            >
              YOUR NAME
            </div>
            <div className="border-solid border-[#ebeaed] self-stretch flex flex-col justify-center pl-5 h-12 shrink-0 items-start border-2 rounded-[100px]">
              <div
                id="YourEmail2"
                className="text-lg font-['DM_Sans'] font-medium leading-[26px] text-[rgba(21,_20,_57,_0.4)]"
              >
                Full name
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-start mb-0 mx-px">
            <div className="text-sm font-['DM_Sans'] font-bold tracking-[2] leading-[26px] uppercase text-[#1e0e62] w-1/4">
              INPUT FIELD
            </div>
            <div className="border-solid border-[#ebeaed] self-stretch flex flex-col justify-center pl-5 h-12 shrink-0 items-start border-2 rounded-[100px]">
              <div
                id="YourEmail"
                className="text-lg font-['DM_Sans'] font-medium leading-[26px] text-[rgba(21,_20,_57,_0.4)]"
              >
                name@mail.com
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-px gap-8">
            <div className="flex flex-col mr-px gap-2 items-start">
              <div className="text-sm font-['DM_Sans'] font-bold tracking-[2] leading-[26px] uppercase text-[#1e0e62] w-1/3">
                YOUR MESSAGE
              </div>
              <div className="border-solid border-[#ebeaed] bg-white self-stretch flex flex-col h-32 shrink-0 items-start pl-4 py-3 border-2 rounded-lg">
                <div
                  id="YourEmail1"
                  className="text-lg font-['DM_Sans'] font-medium leading-[26px] text-[rgba(21,_20,_57,_0.4)]"
                >
                  Message
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between items-start">
              <div className="flex flex-row mt-4 gap-3 items-start">
                <img
                  src="https://file.rendit.io/n/q4wod6f3ZbxL3ZCVgq82.svg"
                  id="On"
                  className="mt-px w-5 shrink-0"
                />
                <div className="font-['DM_Sans'] leading-[26px] text-[rgba(21,_20,_57,_0.4)]">
                  Send me a copy
                </div>
              </div>
              <div className="bg-[#25dac5] flex flex-col justify-center h-12 items-center rounded-[100px]">
                <div
                  id="SignUp1"
                  className="text-center text-lg font-['DM_Sans'] font-medium leading-[26px] text-white mx-10"
                >
                  Send
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm