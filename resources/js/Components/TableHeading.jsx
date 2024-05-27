import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid'
export default function TableHeading({ onSortChanged = () => { }, sort_direction, sort_field, children, name, sortable = true }) {
  return (
    <th onClick={e => onSortChanged(name)} className='px-3 py-3 cursor-pointer'>
      <div className='flex items-center'>
        {children}
        {sortable && (
          <div className="flex items-center flex-col mx-2">
            <ChevronUpIcon
              className={`w-4 ${sort_field === name && sort_direction === 'asc' ? 'text-white' : ''}`}
            />
            <ChevronDownIcon
              className={`w-4 -mt-2 ${sort_field === name && sort_direction === 'desc' ? 'text-white' : ''}`}
            />
          </div>
        )}
      </div>
    </th>
  );
}