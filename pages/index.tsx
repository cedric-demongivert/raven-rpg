import React from 'react'
import { ReactElement } from 'react'

import Head from 'next/head'

import { Document } from '../components/Document'
import { Content } from '../content/Content'

export default function index (props : any) : ReactElement {
  return (
    <div className='application'>
      <Head>
        <title>Corvus</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <div className='application-content'>
        <Document>
          <div className='container'>
            <div className='row'>
              <div className='col'>
                <Content />
              </div>
            </div>
          </div>
        </Document>
      </div>
    </div>
  )
}
