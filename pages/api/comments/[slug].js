import { connectToDb, getAllDocuments, insertDocument } from "@/helper/db-util";

export default async function handler (req, res) {
    const eventId = req.query.slug

    console.log(eventId);

    let client;
    try{
        client = await connectToDb();
    } catch (error) {
        res.status(500).json({message: 'Connecting to the database failed!'})
        client.close()
        return
    }

    if (req.method === 'POST') {
        const {email, name, text} = req.body
        if (
            !email.includes('@') ||
            !name ||
            !name.trim() ||
            text.trim() === '' ||
            !text ||
            !text.trim() === ''
        )  { 
            res.status(422).json({message: 'Invalid inputs'})
            return 
        }
        const newComment = {
            email,
            name,
            text
        }

        let result;
        try {
            result = await insertDocument(client, 'comments', newComment)
            newComment._id = result.insertedId
            res.status(201).json({ message: 'Added Comment', comment: newComment})
        } catch (error) {
            res.status(500).json({message: 'Connecting to the database failed!'})
        }
    }

    if (req.method === 'GET'){
        try {
            const documents = await getAllDocuments(client, 'comments', {_id: -1}, )
            res.status(200).json({comments: documents})
        } catch (error) {
            res.status(500).json({message: 'Getting comments failed'})
            console.log('ddedeedd')
        }
        client.close()
    }
    
}
