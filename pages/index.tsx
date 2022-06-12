import React from 'react'

import Head from 'next/head'

import { DocumentPage } from '../components/DocumentPage'

/**
*
*/
export default function index (properties : index.Properties) : React.ReactElement {
  return (
    <div className='application' id='application'>
      <Head>
        <title>Corvus</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css" integrity="sha384-zB1R0rpPzHqg7Kpt0Aljp8JPLqbXI3bhnPWROx27a9N0Ll6ZP/+DiW/UqRcLbRjq" crossOrigin="anonymous" />
      </Head>

      <DocumentPage origin='http://gitea.cedric-demongivert.com/cdemongivert/corvus.git' name='core' />
    </div>
  )
}

export namespace index {
  /**
  *
  */
  export type Properties = any
}
