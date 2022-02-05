import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Vlad Pavlyuk</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Vote Vlad" />
    </main>
    <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/shell.js"></script>
<script>
  hbspt.forms.create({
	region: "na1",
	portalId: "21400381",
	formId: "bf045340-9975-452f-9435-c99515e7d48e"
	  });
</script>

      <Footer />
    </div>
  )
}
