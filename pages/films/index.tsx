import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'


export default function FilmsPage() {
  return (
    <MainLayout>

      <h1 className={'title'}>
             <Link href="/">Go To Home Page</Link>
      </h1>

      <p className={'description'}>
        Films Page
     </p>
    </MainLayout>      
  )
}
