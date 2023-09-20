import FeaturedPosts from "@/components/home-page/FeaturedPosts";
import Hero from "@/components/home-page/Hero";
import { Fragment } from "react";
import DUMMY_POSTS from "@/data/dummy";

export default function HomePage() {
    return (
        <Fragment>
            <Hero />
            <FeaturedPosts posts = {DUMMY_POSTS}/>
        </Fragment>
    )
}


