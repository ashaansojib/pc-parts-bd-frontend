import React from 'react';
import Profile from './Profile';
import Link from 'next/link';

const Aside = () => {
    return (
        <div className='border p-4'>
            <Profile />
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/dashboard/products">Products</Link>
            <Link href="/dashboard/navigation">Menu Bar</Link>
        </div>
    );
};

export default Aside;