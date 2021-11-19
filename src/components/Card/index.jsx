import styles from './card.module.scss';
// import { WiDayCloudy } from "react-icons/wi";



export default function Card({children}) {
  return (
    <>
        <div className={styles.card}>
          {children}
        </div>
    </>
  )
}