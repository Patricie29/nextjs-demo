import { useRouter } from "next/router"
import NewMeetupForm from "../components/meetups/NewMeetupForm"




const NewMeetUpPage = () => {

    const router = useRouter() // puzijeme toto abychom usera redirectly na hlavni stranku po submitnuti meetupu

    // in api we already have the logic of adding data from the form to the database and here we just need to connect it with the form itself
    const addMeetUphandler = async (enteredMeetupData) => {
        const response = await fetch('/api/new-meetup', { // pokud to je nejaky external API tak tady das tu url. V nasem pripade je to internal api tak tam dame cesticku k tomu


            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-type': 'application/json'
            }
        })

        const data = await response.json()
        console.log(data)

        router.push('/')
        // router.replace('/') pouzitim replace znemoznis kliknuti na tacitko zpet po submitnuti formulare
    }

    return <>
        <NewMeetupForm addMeetUphandler={addMeetUphandler} />
    </>
}


export default NewMeetUpPage 