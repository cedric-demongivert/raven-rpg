import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function HunterMask () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>biomancy-totems-owl-mask</SubjectIdentifier>
      <SubjectTitle>Masque du chasseur</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p className='text-center'>
          <strong>Coût :</strong> 2
        </p>

        <table className="table-1d table-vertical">
          <thead>
            <tr>
              <th style={{width: '75px'}}> Bestialité </th>
              <th style={{width: '300px'}}> Effets </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='text-center'> 0 </td>
              <td>
                <p>
                  <strong>Vision dans le noir.</strong> Les yeux du personnage
                  captent bien mieux la lumière et celui-ci peut voir dans le
                  noir comme en pleine journée. L'absence absolue de toute
                  lumière rend un personnage avec vision dans le noir
                  complètement aveugle. Les yeux du personnage luisent
                  faiblement dans la nuit.
                </p>
              </td>
            </tr>
            <tr>
              <td className='text-center'> 5+ </td>
              <td>
                <p>
                  <strong>Yeux du chasseur.</strong> Les yeux du personnage
                  s'adaptent un peut plus et il peut percevoir bien mieux tous
                  les mouvements dans l'espace.
                </p>

                <p>
                  Perception +2 quand il s'agit de voir.
                </p>

                <p>
                  Maîtrise de toutes les armes +2.
                </p>
              </td>
            </tr>
            <tr>
              <td className='text-center'> 10+ </td>
              <td>
                <p>
                  <strong>Vision du hiboux.</strong> Les yeux du personnage sont
                  de vrais yeux de hiboux, ceux-ci ne peuvent plus se déplacer
                  dans leur orbites mais percoivent beaucoup mieux
                  l'environnement.
                </p>

                <p>
                  Perception +4 quand il s'agit de voir.
                </p>

                <p>
                  Maîtrise de toutes les armes +4.
                </p>
              </td>
            </tr>
            <tr>
              <td className='text-center'> 15+ </td>
              <td>
                <p>
                  <strong>Vision à 360°</strong> Les os du cou du personnage
                  ont mutés et ce sont réarangés pour qu'il puisse tourner sa
                  tête à presque 360°.
                </p>

                <p>
                  Perception +6 quand il s'agit de voir.
                </p>

                <p>
                  Maîtrise de toutes les armes +6.
                </p>
              </td>
            </tr>
            <tr>
              <td className='text-center'> 20+ </td>
              <td>
                <p>
                  <strong>Prophécie.</strong> L'instinct du personnage est
                  tellement affuté qu'il est capable de toucher systématiquement
                  sa cible une fois tous les deux tours.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </SubjectContent>
    </Subject>
  )
}
