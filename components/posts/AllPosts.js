import PostGrid from "./PostsGrid";
import classes from './AllPosts.module.css'



export default function AllPosts(props) {
    const { posts } = props 

    return (
        <section className={classes.posts}>
            <h1>All posts</h1>
            <PostGrid posts = {posts}/>
        </section>
    )
}