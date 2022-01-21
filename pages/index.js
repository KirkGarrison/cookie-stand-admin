import Head from 'next/head'

export default function Home() {
  return (
    <div className='bg-gray-100'>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <body >
        <header className="bg-green-300 p-3 text-3xl bold">
            <h1 className='font-bold'>Cookie Stand Admin</h1>
          </header>
          <main className='w-11/12 flex justify-center px-10 '>
            <div className="bg-green-300 m-7 w-9/12 rounded">
            <StoreForm />
            {/* <CookieStand /> */}
            <ResponseTable />
            </div>
          </main>
          <p className='text-center'>Report Table Coming Soon...</p>
          <p className='text-center'></p>
          <footer className="bg-green-300 p-3 text-gray-600">
              <p>&copy;2021</p>
          </footer>
      </body>
    </div>
  )
}


function StoreForm() {
  return (
    <>
      <p className='text-center text-xl p-3'>Create Cookie Stand</p>
      <form className="w-11/12 my-4  mx-auto flex">
          <p className='mr-2'>Location </p>
          <input type="text" placeholder='Barcelona' className="flex-auto pl-1 bg-gray-200 text-gray-800" />
      </form>
      </>
  )
}

// function CookieStand() {
//   return (
//       <div className="w-96 h-96 bg-gray-900 mx-auto my-4 rounded-full">
//           <div className="w-48 h-48 rounded-full bg-gray-50 relative top-16 left-16 flex items-center justify-center">
//               <p className="text-xl">Ask me anything</p>
//           </div>
//       </div>
//   )
// }

// function CookieStand() { 
//    return (
//     <>
//     <div className='flex items-center '>
//       <p className='text-center text-xl p-3'>Create Cookie Stand</p>
//       <p className='text-center text-xl p-3'>Create Cookie Stand</p>
//       <p className='text-center text-xl p-3'>Create Cookie Stand</p>
//       </div>
//       </>
//     )
//   }

function ResponseTable() {
  return (
      <table className='w-1/2 mx-2 my-2'>
          <thead>
              <tr className='flex items-left justify-start text-gray-800 pl-5 '>
                  <p className='m-6'>Minimum Customers per Hour</p>
                  <p className='m-6'>Maximum Customers per Hour</p>
                  <p className='m-6'>Average Cookies per Sale</p>
              </tr>
          </thead>
          <tbody>
              <tr className='flex items-center justify-between flex-auto pl-4'>
                  <input type="text" className="flex-auto pl-3 bg-gray-100 w-64 " />
                  <input type="text" className="flex-auto pl-11 bg-gray-100 w-64 m-3 " />
                  <input type="text" className="flex-auto pl-11 bg-gray-100 w-64 " />
                  <button className='bg-green-400 w-52 m-1 py-6'>Create</button>
              </tr>
          </tbody>

      </table>
  )
}