import PostContent from "@/components/posts/post-details/PostContent";
import { getPostData, getPostsFiles } from "@/helper/posts-util";

export function getStaticProps(context) {
    const slug = context.params.slug
    console.log(slug)
    const postData = getPostData(slug)
    console.log(postData)
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

export default function PostContentPage(props) {
    const { post } = props
    
    return (
        <PostContent post = {post} />
    )
}
