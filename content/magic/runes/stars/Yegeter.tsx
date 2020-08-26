import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../../components/subject/Subject'

export function Yegeter () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>magic-runes-stars-yegeter</SubjectIdentifier>
      <SubjectKeyword>rune</SubjectKeyword>
      <SubjectTitle>Yégétèr</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <p className='text-center'>
          <img src='./images/runic-yegeter.svg' width='200' />
        </p>

        <p className='text-center ipa'>
          [je.ge.tɛʀ]
        </p>

        <p className='text-center'>
          Yégétèr le maître de l'évolution et du changement est la rune
          permettant de parler des mutations.
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
              <td> L'évolution, le mutant, la mutation. </td>
            </tr>
            <tr>
              <td> Objet </td>
              <td> L'évolution, le mutant, la mutation. </td>
            </tr>
            <tr>
              <td> Adjectif </td>
              <td> Mutant, changeant. </td>
            </tr>
            <tr>
              <td> Verbe </td>
              <td> Changer, muter. </td>
            </tr>
            <tr>
              <td> Adverbe </td>
              <td> En changeant, en mutant. </td>
            </tr>
          </tbody>
        </table>
      </SubjectContent>
    </Subject>
  )
}
