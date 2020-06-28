import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../components/subject/SubjectSummary'
import { SubjectContent } from '../../components/subject/SubjectContent'
import { SubjectTitle } from '../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../components/subject/SubjectIdentifier'
import { Subject } from '../../components/subject/Subject'

function * range (count : number) : Iterable<number> {
  for (let index = 0; index < count; ++index) {
    yield index
  }
}

function cost (intoxication : number) : number {
  return intoxication * (intoxication + 1) / 2
}

export function EtherPoisoning () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>alchemy-ether-poisoning</SubjectIdentifier>
      <SubjectKeyword>Alchimie</SubjectKeyword>
      <SubjectKeyword>Éther</SubjectKeyword>
      <SubjectKeyword>Poison</SubjectKeyword>
      <SubjectTitle>Intoxication à l'éther</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          L'éther est une substance nocive résiduelle méconue conséquence de la
          pratique de la magie, de la consomation de produits alchimiques ou de
          l'usage d'enchantement. C'est un poison lent qui s'accumule dans le
          corps et qui peut provoquer de nombreux problèmes comme des délires,
          de la fièvre, des vertiges, des hémorragies, de la dépendance, des
          mutations ou encore la mort. On parle alors d'intoxication à l'éther.
        </p>

        <p>
          L'intoxication à l'éther est appréciée par un nombre naturel. Chaque
          palier représente une certaine concentration d'éther dans le sang
          ainsi que la durée nécessaire pour qu'une partie de la toxine soit
          éliminée naturellement. Pour perdre un niveau d'intoxication il faut
          attendre un nombre d'heure qui lui est équivalent. Ainsi, un
          personnage ayant un niveau d'intoxication de 5 points mettra 5 heures
          à réduire son intoxication à 4 points, 9 heures pour le réduire à 3
          points et 15 heures au total pour retomber à zéro points.
        </p>

        <table className="table-1d">
          <tbody>
            <tr>
              <td style={{width: '120px'}} rowSpan={2}> Guérison </td>
              {
                [...range(20)].map(function renderCell (index : number) : ReactElement {
                  return (
                    <td style={{width: '40px'}} key={index + 1}>
                      {(cost(index + 1) / 24).toFixed(1)}j
                    </td>
                  )
                })
              }
            </tr>
            <tr>
              {
                [...range(20)].map(function renderCell (index : number) : ReactElement {
                  return (
                    <td style={{width: '40px'}} key={index + 1}>
                      {cost(index + 1)}h
                    </td>
                  )
                })
              }
            </tr>
            <tr>
              <th> Intoxication </th>
              {
                [...range(20)].map(function renderCell (index : number) : ReactElement {
                  return (
                    <th key={index + 1}>{index + 1}</th>
                  )
                })
              }
            </tr>
          </tbody>
        </table>

        <p>
          Un personnage est toujours immunisé aux effets de l'intoxication à
          l'éther à hauteur de la moitiée de ses points de constitution. Au
          delà, il doit réussir un test d'opposition entre sa constitution et
          son niveau d'empoisonement une fois par jour et à chaque fois que son
          niveau d'intoxication augmente. Si le test est une réussite le joueur
          ne fait l'objet d'aucun effet indésirable supplémentaire, si le test
          échoue le joueur doit alors lancer un nombre de dé 6 équivalent au
          tiers de son niveau d'intoxication retranché de la moitié de sa
          constitution et subir les conséquences du résultat obtenu sur la table
          des effets indésirables exposée ci-dessous.
        </p>

        <table className="table-1d table-vertical">
          <thead>
            <tr>
              <th style={{width: '100px'}}> Score </th>
              <th style={{width: '300px'}}> Effet </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> ≤ 3 </td>
              <td>
                Effet éclair sans impact notoire. <br/>
                Hyper-sensibilité, douleur articulaire, fatigue passagère.
              </td>
            </tr>
            <tr>
              <td> 4 - 9 </td>
              <td>
                Épisodes nauséeux et vertiges passagers. <br />
                Perte de deux points de dextérité pendant 1D4 jours. <br />
                Les effets peuvent être divisé par deux avec la consomation
                d'une drogue tonique de qualité 5+. <br />
                Cet effet est cumulable. <br />
                Cet effet disparrais si le niveau d'empoisonement
                est inférieur à la moitiée de la constitution du personnage.
              </td>
            </tr>
            <tr>
              <td> 10 - 14 </td>
              <td>
                Fièvre et douleurs articulaires. <br />
                Pendant 1D6 jours : <br />
                <ul>
                  <li>Perte de deux points de constitution.</li>
                  <li>Perte de deux points de contrôle.</li>
                </ul>
                Cet effet est cumulable <br />
                Cet effet peut être divisés par deux avec l'administration d'un
                anti-douleur et d'une drogue tonique de qualité 10+. <br />
                Cet effet disparrais si le niveau d'empoisonement
                est inférieur à la moitiée de la constitution du
                personnage + 3.
              </td>
            </tr>
            <tr>
              <td> 15 - 16 </td>
              <td>
                Épisode d'hypotermie. <br />
                Perte de quatre points de constitution pendant 1D6 / 3 jours. <br />
                Les effets peuvent être divisés par deux avec l'administration
                d'une drogue tonique de qualité 20+. <br />
                Cet effet est cumulable.
              </td>
            </tr>
            <tr>
              <td> 17 - 20 </td>
              <td>
                Hémoragie. <br />
                Le personnage est sujet à une hémoragie temporaire et perd 1D4
                points de vie. <br />
                Pendant 1D6/2 jours : <br />
                <ul>
                  <li>Perte de deux points de constitution.</li>
                  <li>Perte de deux points de force.</li>
                  <li>Perte de deux points de contrôle.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td> 21 - 25 </td>
              <td>
                Mutation. <br />
                Test opposé de constitution et de volonté contre le niveau
                d'empoisonement, en cas d'échec le personnage gagne un trait de
                d'adaptation à l'éther.
              </td>
            </tr>
            <tr>
              <td> 26 - 36 </td>
              <td>
                Test opposé de constitution et de volonté contre le niveau
                d'empoisonement. Si le test échoue le personnage meurt. <br />
                En cas de réussite, le même test est rejoué cette fois pour
                déterminer si le personnage est l'objet d'une mutation, en cas
                d'échec le personnage gagne un trait d'adaptation à l'éther.
                <br />
                Un personnage avec quatre mutation ou plus réalisant un score de
                26 ou plus devient une abbération d'éther et n'est plus jouable.
              </td>
            </tr>
          </tbody>
        </table>
      </SubjectContent>
    </Subject>
  )
}
