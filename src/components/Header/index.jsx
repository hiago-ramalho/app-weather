import WeatherIcon from '../../assets/images/cloud.png';
// import { WiDayCloudy } from "react-icons/wi";

import styles from './header.module.scss';

export default function Header() {
  return (
    <header>
      <div className={styles.headerContainer} >
        <h1>
          AppWeather
        </h1>

        <img src={WeatherIcon} alt="Weather Icon" />
        {/* <WiDayCloudy className={styles.iconWeather} /> */}
      </div>
    </header>
  )
}