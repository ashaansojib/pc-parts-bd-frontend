import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    return (
        <nav className='border'>
            <div className="my-container">
                <ul>
                    <Link href="#" className='active'>Home</Link>
                    <Link href="#" className='default'>Laptop</Link>
                    <Link href="#" className='default'>Components</Link>
                    <Link href="#" className='default'>Accessorise</Link>
                    <Link href="#" className='default'>Monitor</Link>
                    <Link href="#" className='default'>Networkings</Link>
                    <Link href="#" className='default'>Gadget</Link>
                    <Link href="#" className='default'>Gamming Zone</Link>
                    <Link href="#" className='default'>SSD & HDD</Link>
                    <Link href="#" className='default'>Casing</Link>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;