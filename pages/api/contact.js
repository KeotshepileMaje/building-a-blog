import { MongoClient } from "mongodb";

const urlConnectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.17rztfq.mongodb.net/?retryWrites=true&w=majority`
const mongodbDb = process.env.mongodb_database

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, name, message } = req.body;
    
        if (
            !email ||
            !email.includes('@') ||
            !name ||
            name.trim() === '' ||
            !message ||
            message.trim() === ''
        ) {
            res.status(422).json({ message: 'Invalid input.' });
            return;
        }
    
        const newMessage = {
            email,
            name,
            message,
        };
    
        let client;

        console.log('MongoDB URL:', urlConnectionString)
    
        try {
            client = await MongoClient.connect(urlConnectionString)
        } catch (error) {
            console.error('MongoDB Connection Error:', error)
            res.status(500).json({ message: 'Could not connect to database.' });
            return;
        }

        const db = client.db(mongodbDb);

        try {
            const result = await db.collection('messages').insertOne(newMessage);
            newMessage.id = result.insertedId;
        } catch (error) {
            client.close();
            res.status(500).json({ message: 'Storing message failed!' });
            return;
        }
    
        client.close();
    
        res
            .status(201)
            .json({ message: 'Successfully stored message!', newMessage });
      }

}



// export default function handler(req, res) {
//     if (req.method === 'POST'){
//         const { email, name, message } = req.body

//         if (
//             !email.includes('@') || 
//             !name ||
//             !name.trim() === '' ||
//             !message ||
//             !message.trim() === ''
//         ) {
//             res.status(422).json({message: 'Invalid input'})
//             return;
//         }

//         const newMessage = {
//             email,
//             name,
//             message
//         }
//         console.log(newMessage)

//         res.status(201).json({
//             message: 'Successfully stored message'
//         })
//     }

// }