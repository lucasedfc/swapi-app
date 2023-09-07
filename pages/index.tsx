import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'


export default function Home() {
  return (
   <MainLayout>
     <h1 className={'title'}>
          <Link href="/people">Home Page</Link>
    </h1>
   </MainLayout> 
  )
}
