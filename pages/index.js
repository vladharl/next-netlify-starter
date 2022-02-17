import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
	  <center>
	  <title>Vlad Pavlyuk</title>
	  </center>
        <link rel="icon" href="/favicon.ico" />
	          <Header title="ask@vladpavlyuk.com" />
</Head>
       
      <main>
    </main>

      <Footer />
    </div>
  )
}
