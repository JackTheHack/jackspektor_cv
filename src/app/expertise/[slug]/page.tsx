'use client';

import Image from 'next/image';
import { notFound, usePathname } from 'next/navigation';
import { Expertise, CaseStudy } from '@content';
import { allCaseStudies, allExpertises } from '@content';

export default function ExpertiseDetailsPage() {
  const pathName = usePathname();

  let expertiseObj = allExpertises.find(
    (x) => '/expertise/' + x.slug == pathName,
  );

  if (!expertiseObj) {
    return <div>{pathName}</div>;
  }

  let caseStudyObj = null;

  if (expertiseObj.caseStudy) {
    caseStudyObj = allCaseStudies.find(
      (x) => x._raw.flattenedPath == expertiseObj.caseStudy,
    );
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 flex flex-col items-center text-center">
          <h1 className="mb-4 text-4xl font-bold">{expertiseObj.title}</h1>
          <p
            className="p-8 text-left text-xl"
            dangerouslySetInnerHTML={{ __html: expertiseObj.body.html }}
          ></p>
        </div>
        {caseStudyObj && <CaseStudyBlock caseStudy={caseStudyObj} />}
      </div>
    </div>
  );
}

function CaseStudyBlock({
  caseStudy,
}: {
  caseStudy: CaseStudy | null | undefined;
}) {
  return (
    <div className="mt-12 rounded-lg bg-gray-100 p-8 dark:bg-gray-800">
      <h2 className="mb-4 text-3xl font-semibold">
        Case Study: {caseStudy?.title}
      </h2>
      <p
        className="mb-6 text-lg"
        dangerouslySetInnerHTML={{ __html: caseStudy?.body.html || '' }}
      ></p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {caseStudy?.images?.map((image, index) => (
          <Image
            key={`image${index}`}
            src={image}
            alt={`Case study image ${index}`}
            width={300}
            height={200}
            className="rounded-lg"
          />
        ))}
      </div>
    </div>
  );
}
