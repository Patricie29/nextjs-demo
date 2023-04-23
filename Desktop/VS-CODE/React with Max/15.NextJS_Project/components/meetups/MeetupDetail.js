import styles from './MeetupDetail.module.css'

const MeetupDetail = ({ image, title, description, address }) => {

    return <section className={styles.detail}>

        <img src={image} alt={title} />
        <h1>{title}</h1>
        <address>{address}</address>
        <p>{description}</p>
    </section>
}


export default MeetupDetail