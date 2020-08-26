import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../../components/subject/Subject'

export function Metzeter () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>magic-runes-stars-metzeter</SubjectIdentifier>
      <SubjectKeyword>rune</SubjectKeyword>
      <SubjectTitle>Mètzétèr</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <p className='text-center'>
          <img src='./images/runic-metzeter.svg' width='200' />
        </p>

        <p className='text-center ipa'>
          [mɛt.ze.tɛʀ]
        </p>

        <p className='text-center'>
          Mètzétèr, le prince des marchands, est une rune incontournable quand
          il s'agit de décrire des échanges.
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
              <td> Le marchand, l'échange. </td>
            </tr>
            <tr>
              <td> Objet </td>
              <td> Le marchand, l'échange. </td>
            </tr>
            <tr>
              <td> Adjectif </td>
              <td> Échangé. </td>
            </tr>
            <tr>
              <td> Verbe </td>
              <td> Échanger. </td>
            </tr>
            <tr>
              <td> Adverbe </td>
              <td> ~Échangeant. </td>
            </tr>
          </tbody>
        </table>
      </SubjectContent>
    </Subject>
  )
}
