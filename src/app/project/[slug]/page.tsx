import Link from 'next/link';
import { get_project, get_all_projects_uids } from '@/app/lib/setup';
import Image from 'next/image';
import Tags from '@/app/components/tags';
import React from 'react';
import PageContent from '../../components/MarkdownContent';

const DynamicPage = async ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  let projectData: string = '';
  try {
    projectData = await get_project(slug);
  } catch {
    projectData = `{"name":"Project not found", "primary_image": "loading.jpg"}`;  }
  const project = JSON.parse(projectData);

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
          {project["description"] && (
            <PageContent descriptions={project["description"]} />
          )}
        </div>
        {project["links"] && project["links"].length > 0 && (
          <p className={`text-${project["card_color"]}-300 outfitSemiBold p-2`}>
            {project["links"].length === 1 ? 'Link:' : 'Links:'}
          </p>
        )}
        <div className='grid grid-cols-2 gap-2 mb-6 '>
          {project["links"] && project["links"].map((link: { name: string; url: string; }, index: number) => (
            <a key={index} href={link.url} className='group' >
                <div className={`rounded-mid bg-${project["card_color"]}-300 text-black outfitSemiBold p-6 text-center group-hover:rounded-large group-hover:scale-90 transition duration-300`} >
                {link.name}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export async function generateStaticParams() {
  const projects = await get_all_projects_uids();
  return projects.map((project) => ({
    slug: project,
  }));
}

export default DynamicPage;

export const runtime = 'edge';
