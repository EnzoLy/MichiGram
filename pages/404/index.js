import Image from 'next/image'
import { Navbar } from '../../componets/Navbar/Nabar'
import styles from './styles.module.css'

export default function Custom404 () {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Image src='https://http.cat/404' width='800' height='800' />
      </div>
    </>
  )
}
