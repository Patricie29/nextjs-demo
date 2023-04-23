import MeetupList from "../components/meetups/MeetupList"
import { MongoClient } from "mongodb"

import Head from 'next/head'


const HomePage = (props) => {
    return <>
        <Head>
            <title>React MeetUP</title>
            {/* toto je co se ti ukazuje jako title v zalozce  */}
            <meta name='description' content='toto je co se ukazuje jako short description treba na google' />
        </Head>
        <MeetupList meetups={props.meetups} />
    </>
}





// page even after deployment will automaticaly update depending on the revalidate number 
// it is faster than getServerSideProps becasue it doesnt have to regenerate page every time
export const getStaticProps = async () => {
    //fetch data from API
    // takto nasi databazi connectneme 
    const client = await MongoClient.connect('mongodb+srv://patriciesm:patriciesm@cluster0.dygl91p.mongodb.net/MeetupsNextJs?retryWrites=true&w=majority')  //connect returns a promise so we have to have this handler function as async

    const db = client.db() // this is how you get hold of the database you're connecting to

    const meetupCollection = db.collection('meetups') // volitelny nazev pro collection, pokud neexistuje tak se vytvori a pokud existuje tak se prida do existujici

    const ourFetchedMeetups = await meetupCollection.find().toArray() //toArray abychom dostaly zpet array of objects 

    client.close()


    return {
        props: {
            meetups: ourFetchedMeetups.map((oneMeetUp) => ({
                // musime mapnout protoze mongoDB tomu priradi nejaky random id a to by nam pak tady nevzalo a hazelo error, takze to id musis prehodit na string aby to fungovalo
                title: oneMeetUp.title,
                address: oneMeetUp.address,
                image: oneMeetUp.image,
                id: oneMeetUp._id.toString()
            }))
        },
        revalidate: 1  // toto vlastne kontroluje jestli doslo k nejake zmene v datech, abys porad nemusela davat npm run build tak tady si to muzes nastavit aby to ty data zkontrolovalo a podle toho aktualizovalo. ocekava to cislo - 1 znamena 1 sekunda. pokud bys mela neco co se meni pomaleji tak staci treba jedna hodina - takze bys dala 3600
    }

}

//sometimes you want to render a new page on every request so there is a better alternative: 
// next JS is looking for this name of the function
// this function runs always on the server after deployment, never on the client side. so everything you write here is not accesible from the client side and only run on the server side
// you can use this if you have data that changes multiple times every second 

// export const getServerSideProps = (context) => {
//     // you can also fetch some API data

//     // you should use this option only if you need to get to request and response, otherwise is makes your page slower because it has to regenerate the who page on every request
//     const req = context.req  //context parametr is already built in 
//     const res = context.res

//     return {
//         props: {
//             meetups: dummy_meetups
//         }
//     }

// }


export default HomePage