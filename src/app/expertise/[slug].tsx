import Image from 'next/image';

export default function ExpertiseDetailsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 flex flex-col items-center text-center">
          <h1 className="mb-4 text-4xl font-bold">Business Consulting</h1>
          <p className="max-w-2xl text-xl">
            We provide expert business consulting services to help your company
            grow and succeed in today`s competitive market.
          </p>
        </div>

        <CaseStudy />
      </div>
    </div>
  );
}

function CaseStudy() {
  return (
    <div className="mt-12 rounded-lg bg-gray-100 p-8 dark:bg-gray-800">
      <h2 className="mb-4 text-3xl font-semibold">
        Case Study: Tech Startup Growth
      </h2>
      <p className="mb-6 text-lg">
        We helped a tech startup increase their revenue by 200% in just 6 months
        through strategic planning and market analysis.
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Image
          src="/placeholder.svg?height=200&width=300"
          alt="Graph showing revenue growth"
          width={300}
          height={200}
          className="rounded-lg"
        />
        <Image
          src="/placeholder.svg?height=200&width=300"
          alt="Team meeting"
          width={300}
          height={200}
          className="rounded-lg"
        />
        <Image
          src="/placeholder.svg?height=200&width=300"
          alt="Client testimonial"
          width={300}
          height={200}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
