import AllPosts from "@/components/posts/AllPosts";
import classes from './'
import { getAllPosts } from "@/helper/posts-util";
import { Fragment } from "react";
import Head from "next/head";


export default function AllPostPage(props) {
    const { posts } = props

    return(
        <Fragment>
            <Head>
                <title>All Posts</title>
                <meta 
                    name='description'
                    content='A list of programming posts'
                />
            </Head>
            <AllPosts posts = {posts}/>
        </Fragment>
    )
}

export function getStaticProps(){
    const allPosts = getAllPosts()

    return {
        props: {
            posts: allPosts
        }
    }
}