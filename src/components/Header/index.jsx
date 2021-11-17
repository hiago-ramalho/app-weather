import WeatherIcon from '../../assets/images/weather-icon2.svg';

import styles from './header.module.scss';

export default function Header() {
  return (
    <header>
      <div className={styles.headerContainer} >
        <h1>
          AppWeather
        </h1>

        <img src={WeatherIcon} alt="Weather Icon" />
      </div>
    </header>
  )
}