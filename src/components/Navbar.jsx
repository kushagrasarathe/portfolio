import React from 'react'
import styles from '../../styles/Navbar.module.css'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div>
        <nav className={styles.nav}>
            <ul>
                <Link href='/'><h2>Kushagra Sarathe</h2></Link>
            </ul>
        </nav>
    </div>
  )
}
