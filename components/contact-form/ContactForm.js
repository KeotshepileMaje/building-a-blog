import { useEffect, useRef, useState } from 'react'
import classes from './ContactForm.module.css'
import Notification from '../ui/Notification'

async function sendContactData(contactDetails) {
    const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(contactDetails),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const data = await response.json()

    if (!response.ok){
        throw new Error( data.message || 'Something went')
    }
}

export default function ContactForm () {
    const [requestStatus, setRequestStatus] = useState() // 'pending', 'success', 'error' 
    const [requestError, setRequestError] = useState()
    const emailInputRef = useRef()
    const nameInputRef = useRef()
    const messageInputRef = useRef()
    
    useEffect(() =>{
        if (requestStatus === 'success' || requestStatus === 'error'){
            const timer = setTimeout( () => {
                setRequestStatus(null)
                setRequestError(null)
            },3000)

            return () => clearTimeout(timer)
        }
    },[requestStatus])

    async function sendMessageHandler(event) {
        event.preventDefault()

        const emailInputValue = emailInputRef.current.value
        const nameInputValue = nameInputRef.current.value
        const messageInputValue = messageInputRef.current.value
        
        setRequestStatus('pending')

        try{
            await sendContactData({
                email: emailInputValue,
                name: nameInputValue,
                message: messageInputValue
            })
            setRequestStatus('success')

            // Clear input fields after successful submission
            emailInputRef.current.value = '';
            nameInputRef.current.value = '';
            messageInputRef.current.value = '';

        } catch(error) {
            setRequestError(error.message)
            setRequestStatus('error')
        }
    }

    let notification;

    if (requestStatus === 'pending') {
        notification = {
            status: 'pending',
            title: 'Sending message...',
            message: 'Your message is on its way'
        }
    }
    if (requestStatus === 'success') {
        notification = {
            status: 'success',
            title: 'Success!',
            message: 'Your message sent successfully'
        }
    }
    if (requestStatus === 'error') {
        notification = {
            status: 'error',
            title: 'Error!',
            message: requestError
        }
    }

    return(
        <section className={classes.contact}>
            <h1>How can I help you?</h1>
            <form className={classes.form} onSubmit={sendMessageHandler}>
                <div className={classes.controls}>
                    <div className={classes.control}>
                        <label htmlFor='email'>Your Email</label>
                        <input type='email' id='email' required ref={emailInputRef}/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='name'>Your Name</label>
                        <input type='text' id='name' required ref={nameInputRef}/>
                    </div>                    
                </div>
                <div className={classes.control}>
                    <label htmlFor='message'>Your message</label>
                    <textarea type='text' id='message' rows='5' required ref={messageInputRef}></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Send Message</button>
                </div>
            </form>
            {
                notification && 
                <Notification 
                    status = {notification.status}
                    title = {notification.title}
                    message = {notification.message}
                />
            }
        </section>
    )
}