"use client";

import { personal } from '@content';

import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import React, { useState, useRef } from 'react';
import { fullName } from '../../helpers/utils';
import { Heading } from '../Heading/Heading';
import PDFDownloadButton from '../PDF/PDFDownloadButton';
import Image from 'next/image'

interface HeaderProps {
  secret?: string;
}

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  ArchiveBoxXMarkIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from '@heroicons/react/16/solid'

import {
  PaperAirplaneIcon,
  MoonIcon,
  SunIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { DivideIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';



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

  const handleLinkClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>

      {/* Desktop navigation */}
      <div className="max-w-7xl max-lg:hidden select-none">
        <div className="flex justify-between w-5/6">
          <div className="flex my-6 mb-0">
            <div className="lg:flex gap-8">
              
              <Link href="/">CV</Link>

              <Menu as="div"
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <MenuButton as="a" className="cursor-pointer" onClick={handleLinkClick}>
                  <div className="inline-flex items-center gap-1">
                    <span className="underline hover:decoration-white decoration-blue-9 transition-colors duration-300">
                      Expertise
                    </span>
                    <ChevronDownIcon className={`h-4 w-4 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </div>
                </MenuButton>

                {isOpen && (
                  <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <MenuItems static className="absolute left-0 mt-2 w-80 origin-top-left rounded-xl bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black dark:ring-gray-700 ring-opacity-5 focus:outline-none">
                      <MenuItem>
                        <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                          <PencilIcon className="size-4 text-gray-400 dark:text-gray-500" />
                          Sitecore CMS
                        </button>
                      </MenuItem>
                      <MenuItem>
                        <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                          <ArchiveBoxXMarkIcon className="size-4 text-gray-400 dark:text-gray-500" />
                          .NET Framework
                        </button>
                      </MenuItem>
                      <MenuItem>
                        <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                          <Square2StackIcon className="size-4 text-gray-400 dark:text-gray-500" />
                          NextJS / React / JAMStack
                        </button>
                      </MenuItem>
                      <MenuItem>
                        <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                          <TrashIcon className="size-4 text-gray-400 dark:text-gray-500" />
                          React Native
                        </button>
                      </MenuItem>
                    </MenuItems>
                  </div>
                )}
              </Menu>

              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </div>


      {/* Action buttons - mobile and tablet only */}
      <div className="justify-center text-center gap-4 py-2 mt-10 max-lg:visible xl:hidden 2xl:hidden lg:hidden select-none">
        <button className="inline-flex items-center gap-2 rounded-lg py-2 px-4 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
          <PhoneIcon className="size-5 text-gray-400 dark:text-gray-500" />
          CV
        </button>

        <button className="inline-flex items-center gap-2 rounded-lg py-2 px-4 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
          <PaperAirplaneIcon className="size-5 text-gray-400 dark:text-gray-500" />
          Expertise
        </button>

        <button className="inline-flex items-center gap-2 rounded-lg py-2 px-4 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
          <PlayCircleIcon className="size-5 text-gray-400 dark:text-gray-500" />
          Contact
        </button>
      </div>
    </div>
  );
}

export const Header: React.FC<HeaderProps> = ({ secret }) => {
  return (
    <div className="mb-12 border-b-2 border-neutral-4 py-12">
      <div className="container">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
        <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0 flex-row">
              <Image
                src="/images/profile.jpg"
                alt={fullName}
                fill
                className="object-cover"
                priority
              />
            </div>
          <div className="flex items-center gap-6 flex-1">
            <div className="space-y-2 flex-row">
              <Heading level={1}>{fullName}</Heading>
              <Heading color="neutralSubtle" className="text-balance" level={2}>
                {personal.title}
              </Heading>
            </div>
          </div>
          <PDFDownloadButton secret={secret} />
        </div>
        <TopMenu />
      </div>
    </div>
  );
};
