import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../components/subject/SubjectSummary'
import { SubjectContent } from '../../components/subject/SubjectContent'
import { SubjectTitle } from '../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../components/subject/SubjectIdentifier'
import { Subject } from '../../components/subject/Subject'

export function Categories () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>echoes-categories</SubjectIdentifier>
      <SubjectKeyword>Écho</SubjectKeyword>
      <SubjectKeyword>Catégorie</SubjectKeyword>
      <SubjectTitle>Catégories</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          Il est difficile de se représenter la société des Échos car celle-ci
          évolue dans un univers libéré de la matière et du temps. Il semble
          cependant évident que leurs intérêts ne convergent pas vers un but
          commun et que les Échos s'opposent les uns aux autres constamment.
        </p>

        <p>
          Considérer que la relation entre Échos soit proche du chaos total est
          cependant une simplification extrême de la réalité. Dans les faits il
          existe une forme de hiérarchie des Échos principalement basé sur leur
          rôle au sein du jeu politique constant qui est le leur. Ainsi, certains
          Échos, par ce qu'ils sont plus anciens, plus intelligents ou plus
          puissants que les autres ont une capacité plus importante à imposer leur
          volonté à leurs congénères.
        </p>

        <p>
          La catégorie d'Écho dont un personnage est hôte impacte les effets de
          celui-ci en fonction du type de manifestation. Les Échos les plus
          puissants peuvent prodiguer de prodigieux pouvoirs en contrepartie d'un
          contrôle bien plus difficile, et d'une vie bien plus mouvementée. Certains
          Écho peuvent évoluer d'une catégorie à l'autre, aux prix de difficiles
          épreuves.
        </p>

        <p>
          <em>Les apostats</em>, environ 1% de la masse connue des Échos sont des
          irrégularités qui ne jouent pas le jeu politique de leurs frères et
          soeurs. La course au pouvoir ne les motives pas et ils vivent leur propre
          vie relégué aux marges de la civilisation. Bien qu'ils soit considérés
          comme particulièrement faibles certains des Échos les plus puissants
          seraient bien en fait des apostats et non des primitifs. Il est assez
          difficile de dessiner le portrait d'une catégorie si hétérogène.
        </p>

        <p>
          <em>Les satellites</em> représentent 50%, soit une certaine forme de
          majorité des Échos. Ce sont des faibles sans grandes ambitions qui jouent
          tout de même à leur échelle le jeu de leur plan. Quand un satellite ce
          fait remarqué, par ces faits ou sa puissance, il a de forte chance de se
          faire des contacts et de devenir nobles. Ils sont donc en compétition
          constante les uns vis-à-vis des autres dans une certaine forme de chaos
          contrôlé par des Échos plus intelligents.
        </p>

        <p>
          <em>Les nobles</em> représentent 25% des Échos, ce sont des exécutants
          à la loyauté douteuse dont le seul objectif est d'accumuler suffisamment
          de pouvoir pour gravir l'échelon suppérieur. Ils sont assez libre de faire
          ce qu'ils veulent, et bien qu'ils répondent le plus clair de leur temps à
          des tâches confiés par des princes ils aiment tout de même parachever des
          petits complots visant à saper le pouvoir accumulé par leurs congénères.
        </p>

        <p>
          <em>Les princes</em>, environ 14% des Échos, appartiennent à
          des cours formées autour de primitifs cherchant à obtenir les faveurs d'un
          puissant pour devenir à leur tour des ainés. Ils sont cependant bien plus
          libres que les Échos appartenant à la catégorie qu'ils visent et peuvent
          changer d'obédience sans grandes conséquences sur leur statut bien que le
          manque de fidelité ne soit pas la première qualité recherchée pour un
          ainé. La rude compétition qui a lieue entre les princes représente le
          principal danger de rétrogradation auxquels ils sont confrontés car leur
          statut est avant tout liée à leur influence sur les nobles. En général,
          les princes sont des superviseurs chargés de déleguer les tâches qui leur
          sont confiées pas les ainés.
        </p>

        <p>
          <em>Les ainés</em>, environ 7% des Échos, sont les conseilliers
          directs des primitifs. Bien que suffisamment puissant pour se tenir en
          dehors de la mêlée génerale de leur plan, ils ne sont pas assez légitimes
          pour être indépendants des primitif qu'ils servent aveuglément. Certains,
          rares, peuvent parfois fomanter avec succès un complot pour ce isser au
          sommet du pouvoir, mais échouer une telle entreprise n'est pas sans
          conséquences. Les ainés vivent une vie assez paisible dans l'ensemble et
          laissent court à leur nature profonde tout en tentant de glanner le
          maximum d'information et de moyen possible pour aider le primitif qu'ils
          servent.
        </p>

        <p>
          <em>Les primitifs</em> représente environ 3% des Échos. Ce sont des
          intriguants passés maîtres incontestés du jeu politique de leur plan.
          Ils ont une volonté de fer et un pouvoir quasiment sans limite mais ce
          sont des Échos qui préfèrent les conflits indirects plutôt que les
          confrontations musclées. De par leur rareté les primitifs se connaissent
          tous les uns-les autres, ils semblent former une sorte de conseil d'Échos
          et décident des grandes règles qui ont cours sur leur plan. Comme tout
          conseil d'individus surpuissant, tous les primitifs aimeraient bien
          défaire leurs congénère pour n'être plus que les seuls maîtres à bord de
          leur vaisseau.
        </p>

        <table className='table-1d' style={{ width: '100%'}}>
          <tbody>
            <tr>
              <td> Jet </td>
              <td style={{ width: '150px'}}> ≤ 3% </td>
              <td style={{ width: '150px'}}> ≤ 10% </td>
              <td style={{ width: '150px'}}> ≤ 24% </td>
              <td style={{ width: '150px'}}> ≤ 49% </td>
              <td style={{ width: '150px'}}> ≤ 99% </td>
              <td style={{ width: '150px'}}> = 100% </td>
            </tr>
            <tr>
              <th> Catégorie de l'Écho </th>
              <th> Primitifs </th>
              <th> Ainés </th>
              <th> Princes </th>
              <th> Nobles </th>
              <th> Satellites </th>
              <th> Apostats </th>
            </tr>
          </tbody>
        </table>
      </SubjectContent>
    </Subject>
  )
}
