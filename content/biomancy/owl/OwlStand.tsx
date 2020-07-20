import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function OwlStand () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>biomancy-totems-owl-stand</SubjectIdentifier>
      <SubjectTitle>Posture de l'échassier</SubjectTitle>
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
                  <strong>Silhouette élimé.</strong> Les bras et les jambes du
                  personnage sont un peut plus longs et un peut plus fins que la
                  moyenne. Celui-ci peut se mouvoir un peut plus facilement.
                </p>

                <p>
                  Mouvement +3m
                </p>
              </td>
            </tr>
            <tr>
              <td className='text-center'> 5+ </td>
              <td>
                <p>
                  <strong>Échassier.</strong> Les jambes et les bras du
                  personnage ce sont encore affinés tout en s'allongant
                  légèrement. Son corps semble plus léger, et il lui est plus
                  facile d'occuper l'espace qui lui est disponible.
                </p>

                <p>
                  Acrobatie +2
                </p>

                <p>
                  Discrétion +2
                </p>
              </td>
            </tr>
            <tr>
              <td className='text-center'> 10+ </td>
              <td>
                <p>
                  <strong>Plumage.</strong> Le torse du personnage est couvert
                  d'une couche de longues plumes épaisse lui offrant une
                  protection contre les coups qui lui sont portés.
                </p>

                <p>
                  Armure physique +2
                </p>
              </td>
            </tr>
            <tr>
              <td className='text-center'> 15+ </td>
              <td>
                <p>
                  <strong>Rapace.</strong> Les membres du personnages ne sont
                  plus humain et leur longueur non naturelle, leur finesse
                  extrême à certains points et les importantes touffes de
                  plumes qui viennent faciliter l'ensemble de ses mouvements lui
                  permette de réaliser des acrobaties d'une finesse inégalée.
                  Les armures inadaptées à cette nouvelle morphologie ne peuvent
                  plus être portées.
                </p>

                <p>
                  Mouvement +6m
                </p>

                <p>
                  Acrobatie +4
                </p>
              </td>
            </tr>
            <tr>
              <td className='text-center'> 20+ </td>
              <td>
                <p>
                  <strong>Plumes, griffes et bec.</strong> L'instinct du
                  personnage est tellement affuté qu'il est capable d'enchaîner
                  des séries de coups d'une violence extrême.
                </p>

                <p>
                  Acrobatie +8
                </p>

                <p>
                  Moyennant un test d'opposition d'acrobatie avec malus de 3
                  points, le personnage peut tenter une attaque à outrance lui
                  permettant d'utiliser l'entièreté de ses quatres membres. Si
                  le personnage possède un bec ou un museau il peut tenter aussi
                  de mordre son adversaire par la même occasion.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </SubjectContent>
    </Subject>
  )
}
