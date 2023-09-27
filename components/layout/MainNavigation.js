import Link from "next/link";
import Logo from "./Logo";
import classes from './MainNavigation.module.css'

export default function MainNavigator() {

    return(
        <header className={classes.header}>
            <li>
                <Link href='/' legacyBehavior>
                    <a><Logo/></a>
                </Link>
            </li>
            
            <nav>
                <ul>
                    <li><Link href='/posts'>posts</Link></li>
                    <li><Link href='/contact'>Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}