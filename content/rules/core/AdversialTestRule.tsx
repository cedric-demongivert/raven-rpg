import React from 'react'
import { ReactElement } from 'react'
import { ReactNode } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'
import { Table2D } from '../../../components/table/Table2D'

function range (value : number) : number[] {
  const result : number[] = []

  for (let index = 0; index <= value; ++index) {
    result.push(index)
  }

  return result
}

export function AdversialTestRule () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>rules-core-adversial-test</SubjectIdentifier>
      <SubjectKeyword>Règle</SubjectKeyword>
      <SubjectKeyword>Règle principale</SubjectKeyword>
      <SubjectKeyword>Résolution</SubjectKeyword>
      <SubjectKeyword>Résolution par opposition</SubjectKeyword>
      <SubjectTitle>Résolution par opposition</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          <em>Définition.</em> La résolution par opposition décide de l'issue
          d'une confrontation entre deux éléments du récit. C'est le test type
          pour résoudre le succès des attaques d'un épéiste ou la résistance
          d'une serrure lors d'une tentative de crochetage.
        </p>

        <p>
          <em>Acteur / Opposant.</em> Le joueur qui lance les dés est dit
          acteur de la résolution et le joueur qui subit le test est dit
          opposant à la résolution. Un joueur est toujours acteur de la
          résolution lorsqu'il se confronte à un élément du récit. Dans le cas
          où deux joueurs se confrontent, l'acteur est décidé d'un commun accord
          ou à pile ou face. Finalement, si deux éléments du récit interagissent
          entre-eux, c'est au maître du jeu de répartir les rôles.
        </p>

        <p>
          <em>Test.</em> Une résolution par opposition compare une compétence
          de l'acteur appelée compétence offensive à une compétence de
          l'opposant dite compétence défensive. Pour que l'issue du test soit
          favorable pour l'acteur celui-ci doit obtenir un score <strong>
          strictement supérieur</strong> au niveau de la compétence défensive de
          son opposant augmentée de dix points en lançant un dé à vingt faces et
          en y ajoutant le niveau de sa propre compétence offensive.
        </p>

        <p>
          <em>Exemple.</em> Un personnage avec une compétence de 10 en
          discrétion tentant de se faire discret en escaladant une muraille
          surveillée par un garde ayant une compétence de 12 en perception
          devra obtenir un score strictement supérieur à 22 points.
          En lançant un dé 20 et avec son niveau de discrétion, le personnage
          réussira le test s'il obtient 13, 14, 15, 16, 17, 18, 19 et 20 sur le
          dé et l'échouera dans tous les autres cas. Ce sera toujours au joueur
          de résoudre le test le garde étant un élément de narration.
        </p>

        <p>
          <em>Probabilités.</em> Les chances de succès d'un acteur sur un
          opposant en fonction de leur niveau de compétence respectif sont
          retranscrite dans le tableau suivant. Ces probabilités ne tiennent
          pas compte d'éventuels dés bonus. Le niveau de compétence de l'acteur
          est représenté sur l'axe vertical, et celui de l'opposant sur l'axe
          horizontal.
        </p>

        <Table2D className='text-center' width={20 * 35 + 'px'}>
          {
            range(20).map(function renderRow (actor : number) : ReactNode {
              return (
                <Table2D.Row key={actor}>
                  <Table2D.Cell heading>{actor}</Table2D.Cell>
                  {
                    range(20).map((rival : number) : ReactNode => (
                      <Table2D.Cell key={rival}>
                        {Math.min(Math.max(actor - rival, -9), +9) * 5 + 50}
                        <span className='percent'>%</span>
                      </Table2D.Cell>
                    ))
                  }
                </Table2D.Row>
              )
            }).reverse()
          }
          <Table2D.Row>
            <Table2D.Cell heading width='35px'/>
            {
              range(20).map((index : number) : ReactNode => (
                <Table2D.Cell key={index} heading width='35px'>
                  {index}
                </Table2D.Cell>
              ))
            }
          </Table2D.Row>
        </Table2D>

        <p style={{width : 20 * 35 + 'px', marginLeft: 'auto', marginRight: 'auto'}} className='text-center'>
          <strong>
            Chances de succès d'un acteur contre un opposant dans une
            résolution par opposition. Le niveau de compétence de l'acteur
            est représenté sur l'axe vertical, celui de l'opposant sur
            l'axe horizontal.
          </strong>
        </p>

        <p>
          <em>Degrés de difficulté.</em> Un degré de difficulté (DD) est tout
          simplement le niveau de compétence de l'opposant dans une résolution
          par opposition. Les degrés de difficulté "facile", "moyen",
          "difficile", "très-difficile" et "impossible" valent respectivement
          0, 5, 10, 15 et 20 points.
        </p>
      </SubjectContent>
    </Subject>
  )
}
