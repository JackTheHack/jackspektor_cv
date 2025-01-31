'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Transition } from '@headlessui/react';
import { useState, useRef } from 'react';

interface ExpertiseCard {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
}

const expertiseCards: ExpertiseCard[] = [
  {
    title: 'Sitecore CMS',
    description:
      'Creating responsive and dynamic websites using the latest technologies.',
    imageUrl: '/images/sitecore_icon.png',
    url: '/expertise/sitecore',
  },
  {
    title: '.NET Framework',
    description:
      'Building native and cross-platform mobile applications for iOS and Android.',
    imageUrl: '/images/dotnet_icon.png',
    url: '/expertise/dotnet',
  },
  {
    title: 'NextJS / React / JAMStack',
    description:
      'Designing and implementing scalable cloud infrastructure and services.',
    imageUrl: '/images/nextjs_icon.png',
    url: '/expertise/nextjs',
  },
  {
    title: 'React Native',
    description:
      'Developing intelligent systems and predictive models for various industries.',
    imageUrl: '/images/reactnative_icon.png',
    url: '/expertise/reactnative',
  },
];

function ExpertiseCard({ card }: { card: ExpertiseCard }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href="#"
      className="block h-full text-inherit no-underline"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`flex h-full transform flex-col overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 dark:bg-gray-800 ${
          isHovered ? 'scale-105 shadow-lg' : ''
        }`}
      >
        <div className="flex flex-grow flex-col p-6">
          <div className="mx-auto mb-4 h-16 w-16">
            <Image
              src={card.imageUrl}
              alt={`${card.title} icon`}
              width={64}
              height={64}
              className="object-cover"
            />
          </div>
          <h3
            className={`mb-2 text-center text-xl font-semibold transition-colors duration-300 ${
              isHovered
                ? 'text-primary dark:text-primary-dark'
                : 'text-gray-900 dark:text-gray-100'
            }`}
          >
            {card.title}
          </h3>
          <p className="text-center text-gray-600 dark:text-gray-400">
            {card.description}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default function ExpertiseLanding() {
  return (
    <section className="w-full bg-gray-100 px-12 py-6 dark:bg-neutral-1 md:py-8 lg:py-10">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {expertiseCards.map((card, index) => (
          <div className="h-full" key={index}>
            <ExpertiseCard card={card} />
          </div>
        ))}
      </div>
    </section>
  );
}
