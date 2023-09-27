import FeaturedPosts from "@/components/home-page/FeaturedPosts";
import Hero from "@/components/home-page/Hero";
import { Fragment } from "react";
// import DUMMY_POSTS from "@/data/dummy";
import { getFeaturedPosts } from "@/helper/posts-util";
import Head from "next/head";

export default function HomePage(props) {
    const { posts } = props
    console.log(posts)
    return (
        <Fragment>
            <Head>
                <title>Keotshepile</title>
                <meta 
                    name = "description"
                    content = 'I post about programming and web development'
                />
            </Head>
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
