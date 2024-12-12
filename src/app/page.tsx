import AboutMe from 'src/components/Articles/AboutMe';
import Achievements from 'src/components/Articles/Achievements';
import { AdditionalInfo } from 'src/components/Articles/AdditionalInfo';
import { ContactInformation } from 'src/components/Articles/ContactInformation';
import Professional from 'src/components/Articles/Professional';
import Skills from 'src/components/Articles/Skills';

const Page: React.FC<PageProps> = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <AboutMe />
        <ContactInformation />
      </div>

      <div className="mt-12">
        <Skills />
      </div>

      <div className="mt-12">
        <Professional />
      </div>

      <div className="mt-12">
        <Achievements />
      </div>

      <div className="mt-12">
        <AdditionalInfo />
      </div>
    </div>
  );
};

export default Page;
