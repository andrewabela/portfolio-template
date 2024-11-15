import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Tags from '@/app/components/tags';
import ReactMarkdown from 'react-markdown';
import { notFound } from 'next/navigation';
import { get_setup } from '@/app/lib/setup';

// Fetch data for projects
const setup = await get_setup();
const STATIC_PROJECTS = setup.projects.reduce((acc: Record<string, typeof setup.projects[0]>, project: typeof setup.projects[0], index: number) => {
  acc[index.toString()] = project;
  return acc;
}, {} as Record<string, typeof setup.projects[0]>);

// Validate slug
function isValidSlug(slug: string): slug is keyof typeof STATIC_PROJECTS {
  return typeof slug === 'string' && slug in STATIC_PROJECTS;
}

// Generate static paths ONLY for valid slugs
export function generateStaticParams() {
  return Object.keys(STATIC_PROJECTS).map(slug => ({ slug }));
}

// Generate metadata for the page
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  if (!isValidSlug(params.slug)) {
    notFound();
  }

  const project = STATIC_PROJECTS[params.slug];
  
  return {
    title: project.name,
    description: project.short_description,
  };
}

// Styled markdown component using inline styles
function StyledMarkdown({ children }: { children: string }) {
  return (
    <ReactMarkdown
      components={{
        h1: ({ children }) => <h1 style={{ fontSize: '2em', fontWeight: 'bold' }}>{children}</h1>,
        h2: ({ children }) => <h2 style={{ fontSize: '1.5em', fontWeight: 'bold' }}>{children}</h2>,
        h3: ({ children }) => <h3 style={{ fontSize: '1.17em', fontWeight: 'bold' }}>{children}</h3>,
      }}
    >
      {children}
    </ReactMarkdown>
  );
}

// Main page component
export default function Page({ params }: { params: { slug: string } }) {
  // Validate slug and return 404 for invalid slugs
  if (!isValidSlug(params.slug)) {
    notFound();
  }

  const project = STATIC_PROJECTS[params.slug];

  return (
    <div>
      <Link href="/">
        <div className="fixed top-4 left-4 rounded-full group">
          <div className="bg-white p-2 rounded-full shadow-lg group-hover:scale-90 transition duration-200">
            <img 
              src="/images/logos/arrow_back.svg" 
              alt="Back to all projects" 
              className="w-9 h-9 group-hover:scale-75 transition duration-200" 
            />
          </div>
        </div>
      </Link>

      <Image
        src={`/images/${project.primary_image}`}
        alt={project.name}
        width={3840}
        height={1600}
        className="object-cover w-full h-80 rounded-b-mid"
        priority
      />

      <div className="max-w-[50em] mx-auto">
        <Tags tags={project.tags} />
        <h1 className={`text-6xl outfitSemiBold`}>{project.name}</h1>

        {project.images && project.images.length > 0 && (
          <div 
            className="flex p-1 overflow-x-scroll overflow-y-hidden" 
            style={{ height: '228px' }} 
            aria-label="Project images"
          >
            {project.images.map((image: string, index: number) => (
              <Image
                key={index}
                src={`/images/${image}`}
                alt={project.name}
                width={640}
                height={220}
                className="rounded-mid p-1 mr-2 border-[1px] border-gray-500"
                style={{ height: '220px', width: 'auto' }}
                priority
              />
            ))}
          </div>
        )}

        <div className={`lora bg-${project.card_color}-300 text-black rounded-mid p-2 pl-4 mb-2 mt-4`}>
          {project.description?.map((description: string) => (
            <StyledMarkdown key={description}>{description}</StyledMarkdown>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2 mb-6">
          {project.links?.map((link: { url: string; name: string }, index: number) => (
            <a key={index} href={link.url} className="group">
              <div className={`rounded-mid bg-${project.card_color}-300 text-black outfitSemiBold p-6 text-center group-hover:rounded-large group-hover:scale-90 transition duration-300`}>
                {link.name}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export const runtime = 'edge';