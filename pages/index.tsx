import { MainLayout } from '@/components/layouts/MainLayout'
import Image from 'next/image'



export default function Home() {
  return (
   <MainLayout>
      <div className="starwars-demo">
      <Image src="//cssanimation.rocks/demo/starwars/images/star.svg" alt="Star" className="star"  width="200" height="200"/>
      <Image src="//cssanimation.rocks/demo/starwars/images/wars.svg" alt="Wars" className="wars"  width="200" height="200"/>
      <h2 className="byline" id="byline">The Force Awakens</h2>
    </div>
   </MainLayout> 
  )
}
