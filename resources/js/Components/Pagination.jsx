import { Link } from '@inertiajs/react';

export default function Pagination({ links, queryParams }) {
  const generateUrl = (linkUrl) => {
    console.log(linkUrl);
    if (linkUrl === null) {
      return '';
    }
    for (const key in queryParams) {
      if (Object.hasOwnProperty.call(queryParams, key)) {
        const value = queryParams[key];
        if (key != 'page' && value) {
          linkUrl = `${linkUrl}&${key}=${value}`;
        }
      }
    }
    return linkUrl;
  }
  return (
    <nav className='text-center mt-4'>
      {links.map(link => (
        <Link preserveScroll
          key={link.label}
          href={generateUrl(link.url)}
          className={
            `inline-block py-2 px-3 rounded-lg text-gray-200 text-sm
           ${link.active ? 'bg-gray-950' : ''} ${!link.url ? '!text-gray-500 cursor-not-allowed' : 'hover:bg-gray-950'}`
          } dangerouslySetInnerHTML={{ __html: link.label }}>
        </Link>
      ))}
    </nav>
  )
}