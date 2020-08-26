import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../../components/subject/Subject'

export function Temeter () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>magic-runes-stars-temeter</SubjectIdentifier>
      <SubjectKeyword>rune</SubjectKeyword>
      <SubjectTitle>Tèmétèr</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <p className='text-center'>
          <img src='./images/runic-temeter.svg' width='200' />
        </p>

        <p className='text-center ipa'>
          [tɛ.me.tɛʀ]
        </p>

        <p className='text-center'>
          Tèmétèr, le héros ou encore le glorifié, est une rune permettant de
          parler d'héroïsme et de courage.
        </p>

        <table className='table-1d table-vertical text-center'>
          <thead>
            <tr>
              <th style={{width: '100px'}}> Nature </th>
              <th style={{width: '300px'}}> Synonyme(s) </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> Sujet </td>
              <td> Le héros, le courageux. </td>
            </tr>
            <tr>
              <td> Objet </td>
              <td> Le héros, le courageux. </td>
            </tr>
            <tr>
              <td> Adjectif </td>
              <td> Courageux, héroïque. </td>
            </tr>
            <tr>
              <td> Verbe </td>
              <td> Inspirer, encourager. </td>
            </tr>
            <tr>
              <td> Adverbe </td>
              <td> De manière héroïque, de manière courageuse. </td>
            </tr>
          </tbody>
        </table>
      </SubjectContent>
    </Subject>
  )
}
