import Link from 'next/link'
import Router from 'next/router'
import Head from 'next/head'
import { MainLayout } from '../../components/MainLayout'
export default function About({ title }) {
  const linkClickHandeler = function (e) {
    let way = e.target.textContent.toLowerCase()
    console.log(way)
    if (way === 'home') {
      way = '/'
    }
    Router.push(`${way}`)
  }
  return (
    <MainLayout title="About">
      <h1>{title}</h1>

      <button onClick={linkClickHandeler}>Home</button>
      <button onClick={linkClickHandeler}>Posts</button>
    </MainLayout>
  )
}
About.getInitialProps = async () => {
  console.log(`process.env: ${process.env.API_URL}`);
  
  const res = await fetch(`${process.env.API_URL}/about`)
  const data = await res.json()
  return { title: data.title }
}
