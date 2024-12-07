import React from 'react';
import { get_projects_overview } from '../lib/setup';
import Tags from './tags';

interface IntroProps {
  isDesktop: boolean;
}

const card_view: React.FC<IntroProps> = async ({ isDesktop }) => {
  return (
    <div className='p-0 grid grid-cols-2 gap-4'>

      {(await get_projects_overview()).map((project) => (

        <a href={`/project/${project.UID}`} className='pointer group' key={project.UID}>
          <div className={`bg-${project["card_color"]}-300 shadow-md rounded-mid p-4 h-80 group-hover:rounded-large group-hover:scale-90 transition duration-300`}>
            <Tags tags={project["tags"]} />
            {isDesktop ?
              <h3 className='text-4xl text-black outfitSemiBold  pb-2 pt-2 '>{project["name"]}</h3>
              :
              <h3 className='text-2xl text-black outfitSemiBold pb-2 pt-2 '>{project["name"]}</h3>
            }
            <p className='text-gray-900 lora '>{project["short_description"]}</p>
          </div>
        </a>
      ))}
    </div>
  );
}

export default card_view;