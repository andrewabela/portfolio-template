import Image from 'next/image';
import React from 'react';
import { get_intro, get_first_name, get_last_name, get_personal_links } from '../lib/setup';

interface IntroProps {
  isDesktop: boolean;
}

const Intro: React.FC<IntroProps> = async ({ isDesktop }) => {
  return (
    <div className=''>
      <h2 className='lora text-xl'>{get_intro()}</h2>
      {/* if isDesktop */}
      {isDesktop ?
        <h1 className='outfitSemiBold text-9xl pb-4 pl-4'>{get_first_name()}<br />{get_last_name()}</h1>
        :
        <h1 className='outfitSemiBold text-6xl pb-4 pl-4'>{get_first_name()}<br />{get_last_name()}</h1>
      }

      <div className='pl-8'>
        <div className='inline-flex space-x-4  rounded-full p-2 shadow shadow-gray-600'>
          {(await get_personal_links()).map((link, index) => (
            <a key={index} href={link.url} className='' target='_blank' rel='noopener noreferrer'>
              <div className='shadow-inner shadow-gray-600 rounded-full p-2 hover:bg-gray-800 hover:shadow-gray-400 transition-colors duration-200'>
                <Image src={`/images/logos/${link.logo}`} alt='logo' width={24} height={24} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Intro;