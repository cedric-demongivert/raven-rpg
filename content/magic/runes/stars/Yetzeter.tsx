import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../../components/subject/Subject'

// <img src='./images/runic-yetzeter.svg' width='200' />
export function Yetzeter () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>magic-runes-stars-yetzeter</SubjectIdentifier>
      <SubjectKeyword>rune</SubjectKeyword>
      <SubjectTitle>Yétzétèr</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <p className='text-center'>
          <img src='./images/runic-canvas.svg' width='200' />
        </p>

        <p className='text-center ipa'>
          [jet.ze.tɛʀ]
        </p>

        <p className='text-center'>
          Yétzétèr, le gardien, est une rune qui permet de parler de protection.
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
              <td> Le bouclier, le gardien. </td>
            </tr>
            <tr>
              <td> Objet </td>
              <td> Le bouclier, le gardien. </td>
            </tr>
            <tr>
              <td> Adjectif </td>
              <td> Défensif. </td>
            </tr>
            <tr>
              <td> Verbe </td>
              <td> Défendre, parrer. </td>
            </tr>
            <tr>
              <td> Adverbe </td>
              <td> Défensif. </td>
            </tr>
          </tbody>
        </table>
      </SubjectContent>
    </Subject>
  )
}
