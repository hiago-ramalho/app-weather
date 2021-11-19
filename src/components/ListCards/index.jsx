import Card from "../Card";

import styles from './listCards.module.scss';

import sol from '../../assets/images/sol6.png'
import lua from '../../assets/images/lua2.png'
import chuva from '../../assets/images/chuva2.png'

export default function ListCards() {
  return (
    <main className={styles.listCardsContainer} >
      <Card>
        <h2>Fortaleza - CE</h2>
        {/* <WiDayCloudy className='icon' /> */}
        <img src={sol} alt="" />
        <strong>30ºC</strong>
        <p>Quinta-feira, 18 Nov</p>
      </Card>
      <Card>
        <h2>Fortaleza - CE</h2>
        {/* <WiDayCloudy className='icon' /> */}
        <img src={lua} alt="" />
        <strong>30ºC</strong>
        <p>Quinta-feira, 18 Nov</p>
      </Card>
      <Card>
        <h2>Fortaleza - CE</h2>
        {/* <WiDayCloudy className='icon' /> */}
        <img src={chuva} alt="" />
        <strong>30ºC</strong>
        <p>Quinta-feira, 18 Nov</p>
      </Card>
      <Card>
        <h2>Fortaleza - CE</h2>
        {/* <WiDayCloudy className='icon' /> */}
        <img src={sol} alt="" />
        <strong>30ºC</strong>
        <p>Quinta-feira, 18 Nov</p>
      </Card>
      <Card>
        <h2>Fortaleza - CE</h2>
        {/* <WiDayCloudy className='icon' /> */}
        <img src={lua} alt="" />
        <strong>30ºC</strong>
        <p>Quinta-feira, 18 Nov</p>
      </Card>
      <Card>
        <h2>Fortaleza - CE</h2>
        {/* <WiDayCloudy className='icon' /> */}
        <img src={chuva} alt="" />
        <strong>30ºC</strong>
        <p>Quinta-feira, 18 Nov</p>
      </Card>
      <Card>
        <h2>Fortaleza - CE</h2>
        {/* <WiDayCloudy className='icon' /> */}
        <img src={sol} alt="" />
        <strong>30ºC</strong>
        <p>Quinta-feira, 18 Nov</p>
      </Card>
      <Card>
        <h2>Fortaleza - CE</h2>
        {/* <WiDayCloudy className='icon' /> */}
        <img src={lua} alt="" />
        <strong>30ºC</strong>
        <p>Quinta-feira, 18 Nov</p>
      </Card>
      <Card>
        <h2>Fortaleza - CE</h2>
        {/* <WiDayCloudy className='icon' /> */}
        <img src={chuva} alt="" />
        <strong>30ºC</strong>
        <p>Quinta-feira, 18 Nov</p>
      </Card>
      <Card>
        <h2>Fortaleza - CE</h2>
        {/* <WiDayCloudy className='icon' /> */}
        <img src={sol} alt="" />
        <strong>30ºC</strong>
        <p>Quinta-feira, 18 Nov</p>
      </Card>
    </main>
  )
}