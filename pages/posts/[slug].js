import PostContent from "@/components/posts/post-details/PostContent";
import { getPostData, getPostsFiles } from "@/helper/posts-util";
import Head from "next/head";
import { Fragment } from "react";

export default function PostContentPage(props) {
    const { post } = props
    
    return (
        <Fragment>
            <Head>
                <title>{post.title}</title>
                <meta 
                    name="description"
                    content={post.excerpt}
                />
            </Head>
            <PostContent post = {post} />
        </Fragment>
    )
}

export function getStaticProps(context) {
    const slug = context.params.slug
    const postData = getPostData(slug)
    return {
        props: {
            post: postData
        },
        revalidate: 6000
    }
}

export function getStaticPaths() {
    const postFileNames = getPostsFiles()
    const slugs = postFileNames.map(fileName => fileName.replace(/\.md$/,''))
    return {
        paths: slugs.map((slug) => ({params: {slug: slug}})),
        fallback: false
    }
}
