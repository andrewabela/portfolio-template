"use server";

import { MetadataRoute } from 'next'
import { get_hostname, get_number_of_projects } from './lib/setup';

async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const hostname: string = await get_hostname();
  const projects: number = await get_number_of_projects();
  

  return [
    {
      url: `${hostname}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    ...Array.from({ length: projects }, (_, i) => ({
      url: `${hostname}/project/${i}`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.8,
    })),
  ];
}

export default sitemap;


// "use client";
// // sitemap.ts
// import { MetadataRoute } from 'next'
// import { useRouter } from 'next/router';

 
// export default function sitemap(): MetadataRoute.Sitemap {
//   return [
//     {
//       url: `${useRouter().pathname}/`,
//       lastModified: new Date(),
//       changeFrequency: 'yearly',
//       priority: 1,
//     },
//   ]
// }