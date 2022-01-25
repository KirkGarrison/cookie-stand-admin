import Head from "next/head"
import Header from "./Header.js";
import Main from "./Main.js"

export default function CookieStandAdmin() {
    return (
        <body className=' bg-emerald-50 '>
        <Head>
          <title>Cookie Stand Admin</title>
        </Head>
        <Header />
        <Main />
      </body>
    )
  }