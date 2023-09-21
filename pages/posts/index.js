import AllPosts from "@/components/posts/AllPosts";
import classes from './'
import { getAllPosts } from "@/helper/posts-util";


export default function AllPostPage(props) {
    const { posts } = props

    return(
        <AllPosts posts = {posts}/>
    )
}

export function getStaticProps(){
    const allPosts = getAllPosts()

    console.log(allPosts)

    return {
        props: {
            posts: allPosts
        }
    }
}