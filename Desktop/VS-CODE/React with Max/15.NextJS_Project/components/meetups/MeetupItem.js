import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

import { useRouter } from 'next/router'

const MeetupItem = (props) => {

  const router = useRouter() // you can use this to manipulate with the url

  const showDetailsHandler = () => {

    // teoreticky muze na to pouzit link a odkaz ale takto se to dela manualne
    router.push('/' + props.id)
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          {/* teoreticky bys mohla pouzit Link a odkaz a fungovalo by to stejne, takto se to ale dela manualne */}
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
