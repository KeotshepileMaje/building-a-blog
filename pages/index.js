import FeaturedPosts from "@/components/home-page/FeaturedPosts";
import Hero from "@/components/home-page/Hero";
import { Fragment } from "react";
// import DUMMY_POSTS from "@/data/dummy";
import { getFeaturedPosts } from "@/helper/posts-util";

export default function HomePage(props) {
    const { posts } = props
    console.log(posts)
    return (
        <Fragment>
            <Hero />
            <FeaturedPosts posts = {posts}/>
        </Fragment>
    )
}

export function getStaticProps() {
    const featuredPosts = getFeaturedPosts()

    return {
        props: {
            posts: featuredPosts
        }
    }
}
