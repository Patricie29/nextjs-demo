// protoze to je ve slozce API - ktera se tak musi jmenovat a musi byt ve slozce PAGES tak tady definujeme pouze funkci co chceme aby se s temi daty delalo 

// toto naimportovat na connectnuti tveho cluster s touto file
import { MongoClient } from "mongodb"

const handler = async (req, res) => {

    if (req.method === 'POST') {
        const data = req.body  // pomoci req.body accesness ty data co ti prijdou po te POST method
        const { title, description, image, address } = data  // toto je to co ti prijde v tech datech (na to mame vsechny ty kolonky)

        // a potom co je takto extraknes tyto data muzes poslat do databaze
        // takto nasi databazi connectneme 
        const client = await MongoClient.connect('mongodb+srv://patriciesm:patriciesm@cluster0.dygl91p.mongodb.net/MeetupsNextJs?retryWrites=true&w=majority')  //connect returns a promise so we have to have this handler function as async

        const db = client.db() // this is how you get hold of the database you're connecting to

        const meetupCollection = db.collection('meetups') // volitelny nazev pro collection, pokud neexistuje tak se vytvori a pokud existuje tak se prida do existujici
        const result = await meetupCollection.insertOne(data) //it expects object and we know that our data is object already
        // insert one returns a promise so we can await it as well
        console.log(result)
        // you can also add some error handling 

        //then you wanna close the connection once you're done
        client.close()

        res.status(201).json({ message: 'Meetup added!' })

    }
}


export default handler