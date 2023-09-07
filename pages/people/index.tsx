import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'
import { DarkLayout } from '@/components/layouts/DarkLayout'
import { ReactElement } from 'react'


export default function PeoplePage() {
  return (
    <>
      <h1 className={'title'}>
             <Link href="/">Go To Home Page</Link>
      </h1>

      <p className={'description'}>
        People Page
     </p>

    </>      
  )
}

PeoplePage.getLayout = function getLayout(page: ReactElement) {
  
  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}
