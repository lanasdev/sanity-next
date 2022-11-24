import Image from 'next/image'
import Link from 'next/link'
import HeroImg from '../public/img/vivint-solar-9CalgkSRZb8-unsplash.jpg'

const Hero = ({ title, subtitle, image, cta, ctaLink }) => {
  return (
    <div className="relative h-[90vh] w-full overflow-hidden bg-white">
      <Image src={HeroImg} alt="Hero Image" className=" object-cover" />
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold text-white">{title}</h1>
        <p className="text-white">{subtitle}</p>
        <Link href={ctaLink ? ctaLink : '/'}>{cta}</Link>
      </div>
    </div>
  )
}

export default Hero
