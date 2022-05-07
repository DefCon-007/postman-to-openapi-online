import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
// import converter from '../utils/converter';
import postmanToOpenApi from 'postman-to-openapi-module';

export default function Home() {

  const showFile = async (e) => {
    e.preventDefault()
    const reader = new FileReader()
    reader.onload = async (e) => {
      const text = postmanToOpenApi(e.target.result)
      console.log(text)
      alert(text)
    };
    reader.readAsText(e.target.files[0])
  }

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my new app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <input type="file" onChange={(e) => showFile(e)} />
      </main>

      <Footer />
    </div>
  )
}
