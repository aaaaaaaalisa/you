import Link from "next/link";
import { FC } from "react";
import navItems from "./navigationData";


const Navigation: FC = () => {
    return (
        <nav className='pt-10 flex justify-center'>
            <ul className='text-3xl flex space-x-10'>
                {
                    navItems.map(navItem => {
                        return (
                            <li>
                                <Link
                                    className="transition ease-in-out duration-500 hover:text-cyan-700"
                                    href={`${navItem.url}`}
                                >
                                    {navItem.text}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Navigation 
