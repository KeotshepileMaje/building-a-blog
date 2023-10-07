import Link from "next/link";
import classes from './PostItem.module.css'
import Image from "next/image";

export default function PostItem(props) {
    const { title, image, date, excerpt, description, slug } = props.post

    const dateInFormat = new Date(date).toLocaleDateString('en-US', {
        day: "numeric",
        month: 'long',
        year: 'numeric'
    })
    const imagePath = `/images/posts/${slug}/${image}`
    const linkPath =  `/posts/${slug}`

    return (
        <li className={classes.post}>
            <Link href={linkPath} legacyBehavior>
                <a>
                    <div className={classes.image}>
                        <Image 
                            src = {imagePath} 
                            alt = {title}
                            width = {500}
                            height= {200}

                        />
                    </div>
                    <div className={classes.content}>
                        <h3>{title}</h3>
                        <time> {dateInFormat}</time>
                        <p>{excerpt}</p>
                    </div>
                </a>
            </Link>
        </li>
    )
}