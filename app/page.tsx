import Image from 'next/image'
import { Inter } from '@next/font/google'
import Hello from "./hello"
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
        {/* <Hello/> */}
        New Page on Home
        {/* <Link href={"/"}>Go Back.</Link>
        <Link href={"/second"}>Go to third Page</Link> */}
    </main>
  )
}
