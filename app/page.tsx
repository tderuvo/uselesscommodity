import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Story from '@/components/Story'
import Products from '@/components/Products'
import CustomCommodity from '@/components/CustomCommodity'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Story />
        <Products />
        <CustomCommodity />
      </main>
      <Footer />
    </>
  )
}
