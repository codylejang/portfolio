import ContactModal from './components/ContactModal'
import ResumeModal from './components/ResumeModal'

export default function FooterTabs() {
    return (
      <div className="fixed bottom-4 left-4 flex flex-col md:flex-row items-start md:items-end space-y-2 md:space-y-0 md:space-x-6 text-xs md:text-sm font-light text-gray-500 tracking-wide uppercase px-4 md:px-0">
        <div className="flex flex-col space-y-1">
          <ResumeModal />
          <a href="https://github.com/codylejang" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition">Github</a>
          <a href="https://www.linkedin.com/in/cody-lejang/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition">LinkedIn</a>
          <ContactModal />
        </div>
        <p className="text-black font-normal text-xs md:text-sm">CODY LEJANG</p>
      </div>
    )
  }