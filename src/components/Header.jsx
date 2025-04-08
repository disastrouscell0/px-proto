import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (  
        <header className='flex justify-between items-center p-5 bg-gray-300 [&>_*]:text-blue-950'>
            <div>
                <Link href='/'>MIC Tool</Link>
            </div>
            <div />
            <div className='flex items-center gap-4'>
                <Link href='/reports'>Reports</Link>
                <Link href='/' className='px-5 py-1 bg-stone-800 text-stone-50 rounded-md'>Import</Link>
            </div>
        </header>
    );
}
 
export default Header;