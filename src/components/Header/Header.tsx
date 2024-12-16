'use client';

import { personal } from '@content';

import {
  ChevronDownIcon,
  PhoneIcon,
  RssIcon,
  SunIcon,
  MoonIcon,
  PlayCircleIcon,
} from '@heroicons/react/20/solid';
import React, { useState, useRef, useContext } from 'react';
import { fullName } from '../../helpers/utils';
import { Heading } from '../Heading/Heading';
import PDFDownloadButton from '../PDF/PDFDownloadButton';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  secret?: string;
}

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import {
  ArchiveBoxXMarkIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from '@heroicons/react/16/solid';

import { DocumentIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import { DivideIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';

function TopMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 300); // 300ms delay before closing
  };

  const { push } = useRouter();

  const handleLinkClick = () => {
    push('/expertise');
  };

  return (
    <div>
      {/* Desktop navigation */}
      <div className="max-w-7xl select-none max-lg:hidden">
        <div className="flex w-5/6 justify-between">
          <div className="my-6 mb-0 flex">
            <div className="gap-8 lg:flex">
              <Link href="/">CV</Link>

              <Menu
                as="div"
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <MenuButton
                  as="a"
                  onClick={handleLinkClick}
                  className="cursor-pointer"
                >
                  <div className="inline-flex items-center gap-1">
                    <span className="underline decoration-blue-9 transition-colors duration-300 hover:decoration-white">
                      Expertise
                    </span>
                    <ChevronDownIcon
                      className={`h-4 w-4 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </div>
                </MenuButton>

                {isOpen && (
                  <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <MenuItems
                      static
                      className="absolute left-0 mt-2 w-80 origin-top-left rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800 dark:ring-gray-700"
                    >
                      <MenuItem>
                        <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
                          <PencilIcon className="size-4 text-gray-400 dark:text-gray-500" />
                          Sitecore CMS
                        </button>
                      </MenuItem>
                      <MenuItem>
                        <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
                          <ArchiveBoxXMarkIcon className="size-4 text-gray-400 dark:text-gray-500" />
                          .NET Framework
                        </button>
                      </MenuItem>
                      <MenuItem>
                        <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
                          <Square2StackIcon className="size-4 text-gray-400 dark:text-gray-500" />
                          NextJS / React / JAMStack
                        </button>
                      </MenuItem>
                      <MenuItem>
                        <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
                          <TrashIcon className="size-4 text-gray-400 dark:text-gray-500" />
                          React Native
                        </button>
                      </MenuItem>
                    </MenuItems>
                  </div>
                )}
              </Menu>

              <Link href="/blog">Blog</Link>

              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Action buttons - mobile and tablet only */}
      <div className="mt-10 select-none justify-center gap-4 py-2 text-center max-lg:visible lg:hidden xl:hidden 2xl:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
        >
          <DocumentIcon className="size-5 text-gray-400 dark:text-gray-500" />
          CV
        </Link>

        <Link
          href="/expertise"
          className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
        >
          <AcademicCapIcon className="size-5 text-gray-400 dark:text-gray-500" />
          Expertise
        </Link>

        <Link
          href="/blog"
          className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
        >
          <RssIcon className="size-5 text-gray-400 dark:text-gray-500" />
          Blog
        </Link>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
        >
          <PhoneIcon className="size-5 text-gray-400 dark:text-gray-500" />
          Contact
        </Link>
      </div>
    </div>
  );
}

export const Header: React.FC<HeaderProps> = ({ secret }) => {
  return (
    <div className="mb-12 border-b-2 border-neutral-4 py-12">
      <div className="container">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
          <div className="relative h-20 w-20 flex-shrink-0 flex-row overflow-hidden rounded-full">
            <Image
              src="/images/profile.jpg"
              alt={fullName}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-1 items-center gap-6">
            <div className="flex-row space-y-2">
              <Heading level={1}>{fullName}</Heading>
              <Heading color="neutralSubtle" className="text-balance" level={2}>
                {personal.title}
              </Heading>
            </div>
          </div>
          <PDFDownloadButton secret={secret} />
          <DarkModeToggle />
        </div>
        <TopMenu />
      </div>
    </div>
  );
};
