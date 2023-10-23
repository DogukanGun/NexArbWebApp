import ContactForm from '@/components/ContactFrom/ContactForm'
import HomeHero from '@/components/Hero/Hero'
import CustomNavbar from '@/components/Navbar/Navbar'
import HomeTeam from '@/components/Team/Team'
import HomeWorks from '@/components/Works/Works'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <div
        className="overflow-hidden bg-[linear-gradient(349deg,_#4a056a_-9%,#09092e_16%,rgba(0,_6,_23,_0)_56%),_linear-gradient(164deg,_#12056a_-14%,#020a07_21%,#06012e_54%)] bg-cover,_cover bg-50%_50%,_50%_50% bg-blend-normal,_normal bg-repeat-no-repeat,_no-repeat flex flex-col justify-between gap-[430px] w-full"
      >
        <div className="flex flex-col gap-[257px]">
          <div style={{ "background": "url('./homebackground.png')","backgroundSize":"cover" }} >
            <CustomNavbar />
            <HomeHero />
          </div>
          <HomeWorks />
          <HomeTeam />
        </div>
        <ContactForm />
      </div>
    </main>
  )
} 
