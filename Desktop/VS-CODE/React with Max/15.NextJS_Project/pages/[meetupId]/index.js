import MeetupDetail from "../../components/meetups/MeetupDetail"
import { MongoClient, ObjectId } from "mongodb"

const MeetupDetails = (props) => {


    return <>
        <MeetupDetail
            image={props.meetupDataProp.image}
            address={props.meetupDataProp.address}
            title={props.meetupDataProp.title}
            description={props.meetupDataProp.description} />
    </>

}

// you have to use this function only if you use getStaticProps
export const getStaticPaths = async () => {

    // fetch and connect to mongo db
    const client = await MongoClient.connect('mongodb+srv://patriciesm:patriciesm@cluster0.dygl91p.mongodb.net/MeetupsNextJs?retryWrites=true&w=majority')  //connect returns a promise so we have to have this handler function as async

    const db = client.db() // this is how you get hold of the database you're connecting to

    const meetupCollection = db.collection('meetups') // volitelny nazev pro collection, pokud neexistuje tak se vytvori a pokud existuje tak se prida do existujici

    const ourFetchedMeetups = await meetupCollection.find({}, { _id: 1 }).toArray() //toArray abychom dostaly zpet array of objects 
    // find({}) znamena najdi vse, muzeme ale pridat second argument find({}, { }) kde definujeme ktere fields chceme vytahnout, napriklad jenom jemno, nebo jenom id atd. _id: 1 znamena at vytahne jenom id values a nic jineho

    client.close()

    // tedka muzeme generovat paths dynamically 
    return {
        // fallback will tell next js if our paths contain all possible parameters values  (all meetups) or just some of them 
        fallback: true,
        // kdyz rekneme ze fallback je false tak rikame ze pouze ty paths, ktere tady mame vypsane s epredvygeneruji, coz znamena ze pokud by user zadal do url treba id ktere tu vypsane nemame, tak by se mu hodila error page.
        // pokud alre reknes ze fallback je true tak si v podstate jenom vypsala nejake possible paths, treba ty ktere jsou nejpouzivanejsi, tak ty se predvygeneruji, a kdyby user klikl na neco co tu nemame, tak by se to vygenerovalo 'za chodu' tedy az pote co na to klikl

        //DYNAMICALLY GENERATED PATHS
        paths: ourFetchedMeetups.map((oneMeetup) => {
            return {
                params: {
                    meetupId: oneMeetup._id.toString()
                }
            }
        })

        // HARDCODED
        // paths: [
        //     {
        //         params: {
        //             meetupId: 'meetup1'
        //         }
        //     },
        //     {
        //         params: {
        //             meetupId: 'meetup2'
        //         }
        //     },
        // ]
    }
}

//using getstatiprops pregenerates all possible pages when you run npm run build. meaning it already pregerenaretes every page for every meetup  you have here
export const getStaticProps = async (context) => {
    // fetch data for a singe meetup


    // you have to display different data for each meetup. That changes depending on the id. So we need to get the id of the clicked meetup. Normaly we could use useRouter hook to extract the id from the url but here you cannot use any hooks. So we will use context parameter.

    const meetupIDfromURL = context.params.meetupId   // tady to posledni slovo musi odpovidat tomu co mas v [ ] v pages, v nasem pripade tam mame [meetupId] a timto zpusobem si ziskala to id ktere se dalo do url

    // fetch and connect to mongo db
    const client = await MongoClient.connect('mongodb+srv://patriciesm:patriciesm@cluster0.dygl91p.mongodb.net/MeetupsNextJs?retryWrites=true&w=majority')  //connect returns a promise so we have to have this handler function as async

    const db = client.db() // this is how you get hold of the database you're connecting to

    const meetupCollection = db.collection('meetups') // volitelny nazev pro collection, pokud neexistuje tak se vytvori a pokud existuje tak se prida do existujici

    const oneFetchedMeetup = await meetupCollection.findOne({ _id: new ObjectId(meetupIDfromURL) }) //ObjectId je od mongodb a zajisti aby to bylo ve spravnem formatu 

    client.close()

    return {
        props: {
            meetupDataProp: {
                id: oneFetchedMeetup._id.toString(),
                title: oneFetchedMeetup.title,
                address: oneFetchedMeetup.address,
                description: oneFetchedMeetup.description,
                image: oneFetchedMeetup.image

            }
        }
    }

}


export default MeetupDetails

