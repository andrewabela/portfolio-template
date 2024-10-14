import { MetadataRoute } from 'next'
import { get_hostname } from './lib/setup';

 
export default async function robots(): Promise<MetadataRoute.Robots> {
    const hostname: string = await get_hostname();
  return {
    rules: {
      userAgent: '*',
    //   allow: '/',
      disallow: '/',
    },
    sitemap: `${hostname}/sitemap.xml`,
  }
}
