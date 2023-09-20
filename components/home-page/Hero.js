import Image from 'next/image'
import classes from './Hero.module.css'

export default function Hero() {
    
    return(
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image 
                    src='/images/site/keos-profilepic.png' 
                    alt="Keotshepile's Image"
                    width= {300}
                    height={300}
                />
            </div>
            <h1>Hi, My name is Keotshepile Maje</h1>
            <p> I am a web developer blogger that is focused most on the javascript and React.</p>
        </section>
    )
}