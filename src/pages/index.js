import Head from 'next/head'
import PageLayout from '@/components/layout'
import Hero from '@/components/hero'
import NewsLetter from '@/components/newsletter'
import TopCollection from '@/components/Topcollection'
import RecentListing from '@/components/recentlisting'
import FeaturedCollection from '@/components/featuredcollection'
import PlenaIntegration from '@/components/plena'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Mintyplex - App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <PageLayout>
        <Hero />
        <TopCollection />
        {/* <FeaturedCollection/> */}
        {/* <RecentListing/> */}
        <NewsLetter />
        {/* <PlenaIntegration /> */}
      </PageLayout>
    </>
  )
}
