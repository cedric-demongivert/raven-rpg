import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../../components/subject/Subject'

export function Setmeter () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>magic-runes-stars-setmeter</SubjectIdentifier>
      <SubjectKeyword>rune</SubjectKeyword>
      <SubjectTitle>Sètmétèr</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <p className='text-center'>
          <img src='./images/runic-canvas.svg' width='200' />
        </p>

        <p className='text-center ipa'>
          [sɛt.me.tɛʀ]
        </p>

        <p className='text-center'>
          Sètmétèr, le coeur de la tempête, est une rune permettant de former
          des évocations liées à la foudre et au gros temps.
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
              <td> La tempête, la foudre. </td>
            </tr>
            <tr>
              <td> Objet </td>
              <td> La tempête, la foudre. </td>
            </tr>
            <tr>
              <td> Adjectif </td>
              <td> Foudroyant. </td>
            </tr>
            <tr>
              <td> Verbe </td>
              <td> Fourdoyer. </td>
            </tr>
            <tr>
              <td> Adverbe </td>
              <td> Foudroyant. </td>
            </tr>
          </tbody>
        </table>
      </SubjectContent>
    </Subject>
  )
}
