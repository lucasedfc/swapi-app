import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'


export default function StarshipsPage() {
  return (
    

    <MainLayout>
      <h1 className={'title'}>
             <Link href="/">Go To Home Page</Link>
      </h1>

     <p className={'description'}>
        Starship Page
     </p>
     </MainLayout>
     

      


    
  )
}
