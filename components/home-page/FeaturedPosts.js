import { Fragment } from "react";
import classes from './FeaturePosts.module.css'
import PostGrid from "../posts/PostsGrid";

export default function FeaturedPosts(props){
    const { posts } = props

    return(
        <section className={classes.latest}>
            <h2>Featured Posts</h2>
            <PostGrid posts = {posts}/>
        </section>
    )
}