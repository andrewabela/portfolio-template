"use server";

import { MetadataRoute } from 'next'
import { get_hostname, get_all_projects_uids } from './lib/setup';

async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const hostname: string = await get_hostname();
  const projects: Array<string> = await get_all_projects_uids();
  

  return [
    {
      url: `${hostname}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    ... projects.map((project) => ({
      url: `${hostname}/project/${project}`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.8,
    }))
  ];
}

export default sitemap;