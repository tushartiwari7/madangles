import React from 'react'
import styles from '../styles/Nav.module.css'
import Link from 'next/link';
import categories from '../data/types.json'
const Nav = () => {
    return (
        <nav className={` ${styles.nav} ${styles.sticky}`}> 
            <ul>
                <li><Link href="/">Home</Link></li>
                {categories.types.map(category => {
                return (
                <li key={category.id}>
                    <Link href={`/category/${category.link}`} key={category.id} >{category.title}</Link>
                </li>
                )
                })}
            </ul>
        </nav>
    )
}

export default Nav;
