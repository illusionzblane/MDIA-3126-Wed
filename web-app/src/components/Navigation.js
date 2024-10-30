"use client";

import Link from "next/link";

export default function Navigation() {
    return (
        <nav className='p-3'>
            <header>
                <h2 className='text-2xl mb-3'>Navigation</h2>
            </header>

            <ul>
                <li>
                    <Link href={"/map"}>Maps</Link>
                </li>
                <li>
                    <Link href={"/api"}>APIs</Link>
                </li>
            </ul>
        </nav>
    );
}
