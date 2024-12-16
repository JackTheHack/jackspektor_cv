import AboutMe from 'src/components/Articles/AboutMe';
import Achievements from 'src/components/Articles/Achievements';
import { AdditionalInfo } from 'src/components/Articles/AdditionalInfo';
import { ContactInformation } from 'src/components/Articles/ContactInformation';
import Professional from 'src/components/Articles/Professional';
import Skills from 'src/components/Articles/Skills';

const Page: React.FC<PageProps> = () => {
  return (
    <div className="container">
      <div className="mt-20 text-center">
        <h1 className="mb-4 text-4xl font-bold">Oops! Page Not Found</h1>
        <p className="mb-6 text-lg">
          The page you`re looking for doesn`t exist. Please check the URL or try
          searching for what you`re looking for.
        </p>
        <a
          href="/"
          className="inline-block rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export default Page;
