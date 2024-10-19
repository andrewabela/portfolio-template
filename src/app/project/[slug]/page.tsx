"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { get_project } from '@/app/lib/setup';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Tags from '@/app/components/tags';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

const StyledMarkdown = styled(ReactMarkdown)`
  h1 {
    font-size: 2em;
    font-weight: bold;
  }
  h2 {
    font-size: 1.5em;
    font-weight: bold;
  }
  h3 {
    font-size: 1.17em;
    font-weight: bold;
  }
`;

const Page = ({ description }: { description: string }) => {
  return <StyledMarkdown>{description}</StyledMarkdown>;
};

const DynamicPage = () => {
  const pathname = usePathname();
  const slug = parseInt(pathname.split('/').pop() || '', 10);
  interface Project {
    primary_image: string;
    name: string;
    tags: string[];
    images?: string[];
    card_color: string;
    description?: string[];
    short_description?: string;
    links?: { name: string; url: string }[];
  }

  const [project, setProject] = useState<Project>({ primary_image: 'loading.jpg', name: 'Loading...', tags: [], card_color: '' });
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const projectData = await get_project(slug);
        setProject(JSON.parse(projectData));
      } catch (error) {
        console.error(error);
        // redirect to home page because the project does not exist 404
        window.location.replace("/");
      }
    };
    fetchProject();
  }, [slug]);

  return (
    <div >
      <Link href="/">
        <div className="fixed top-4 left-4 rounded-full group ">
          <div className=" bg-white p-2 rounded-full shadow-lg   group-hover:scale-90 transition duration-200">
            <img src="/images/logos/arrow_back.svg" alt="Back to all projects" className="w-9 h-9 group-hover:scale-75 transition duration-200" />
          </div>
        </div>
      </Link>
      <Image
        src={"/images/" + project["primary_image"]}
        alt={project["name"]}
        width={3840}
        height={1600}
        className='object-cover w-full h-80 rounded-b-mid'
        priority
      />
      <div className='max-w-[50em] mx-auto'>
        <Tags tags={project["tags"]} />
        <h1 className={`text-6xl outfitSemiBold `}>{project["name"]}</h1>
        {project["images"] && project["images"].length > 0 && (
            <div className='flex p-1 overflow-x-scroll overflow-y-hidden' style={{ height: '228px' }} aria-label="Project images">
            {project["images"].map((image: string, index: number) => (
              <Image
                key={index}
                src={"/images/" + image}
                alt={project["name"]}
                width={640}
                height={220}
                className='rounded-mid p-1 mr-2 border-[1px] border-gray-500'
                style={{ height: '220px', width: 'auto' }}
                priority
              />
            ))}
            </div>
        )}
        <div className={`lora bg-${project["card_color"]}-300 text-black rounded-mid p-2 pl-4 mb-2 mt-4`} >
          {project["description"] && project["description"].map((description: string) => (
            <Page key={description} description={description} />
          ))}
        </div>
        {project["links"] && project["links"].length > 0 && (
          <p className={`text-${project["card_color"]}-300 outfitSemiBold p-2`}>
            {project["links"].length === 1 ? 'Link:' : 'Links:'}
          </p>
        )}
        <div className='grid grid-cols-2 gap-2 mb-6 '>
          {project["links"] && project["links"].map((link: { name: string; url: string; }, index: number) => (
            // <div key={index} className={'pointer group'}>
            <a key={index} href={link.url} className='group' >
                <div className={`rounded-mid bg-${project["card_color"]}-300 text-black outfitSemiBold p-6 text-center group-hover:rounded-large group-hover:scale-90 transition duration-300`} >
                {link.name}
              </div>
            </a>
            // </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DynamicPage;
export const runtime = 'edge';