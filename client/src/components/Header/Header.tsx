import Image from 'next/image'
import { FC } from 'react'
import styles from './header.module.css'
import Burguer from './menuBurguer/Burguer'
import Nav from './nav/Nav'
import Link from 'next/link'

const Header: FC = () => {
  //const { isTablet } = useResize()
  return (
    <header className={`flex ${styles.header}`}>
      <Link href='/'>
        <Image
          src="/logo.png"
          alt="My Image"
          width={50}
          height={50}
        />
      </Link>
      <Nav />
      <Burguer>
        <Nav /> {/*Pasamos como children al componente Nav para que siga siendo un componente de servidor y no se vea afectado por el 'use client' dentro del componente Burguer*/}
      </Burguer>
    </header >
  )
}
export default Header

//Cambio el hook useResize por mediasqueries para que el compoennte sea completamente renderizado en el servidor.