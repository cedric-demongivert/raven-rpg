import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function Incantation () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>magic-evocation-incantation</SubjectIdentifier>
      <SubjectTitle>Incantation</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <p>
          <strong>L'incantation d'un sortilège</strong> peut être subdivisé en
          autant d'action que nécéssaire appellées <strong>action
          d'incantation</strong>. Lors d'une telle action, le magicien doit
          réussir un test de maîtrise de l'incantation en opposition avec un
          degré de difficulté calculé à l'avance pour pouvoir avancer ou
          finaliser son sortilège. Si le test d'incantation est un succès le
          magicien avance un peut plus dans l'évocation de son sort, si le test
          échoue, on parle alors d'échec de l'évocation, ou de <strong>
          catastrophe ésothérique</strong>.
        </p>

        <p>
          Le <strong>degré de difficulté</strong> d'une action d'incantation
          dépend du nombre de symboles à incanter en une même action. Un
          magicien est libre de choisir ce nombre de symbole au commencement de
          son action. Pour chaque symbole à incanter, la difficulté de l'action
          augmente de 4 points. L'usage de certains atouts peut réduire ce degré
          de difficulté de base.
        </p>

        <p>
          Certains <strong>malus contextuels</strong> peuvent s'additionner à la
          difficulté de base d'une incantation :
        </p>

        <ul>
          <li>
            Pour chaque blessure légère non-traité, le magicien voit augmenter
            la difficulté de son incantation de 2 point.
          </li>
          <li>
            Pour chaque blessure grave non-traité, le magicien voit augmenter
            la difficulté de son incantation de 4 points.
          </li>
          <li>
            Pour chaque adversaire au contact, le magicien voit augmenter
            la difficulté de son incantation de 4 points.
          </li>
          <li>
            Si le magicien se déplace tout en incantant, la difficulté de son
            incantation augmente de 2 points.
          </li>
        </ul>

        <p>
          Si un magicien échoue un test d'évocation, on parle alors de <strong>
          catastrophe ésothérique</strong> : dans les faits, une erreur
          dans les paroles ou la vision d'un mauvais signe ont des conséquences
          inatendues. Dans une telle situation, le magicien doit lancer 1D20 et
          éxécuter un des effets de la table suivante :
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
              <td> 1 - 4 </td>
              <td>
                <strong>Dissipation.</strong> Dans le cas d'une dissipation
                les effets liés à l'incantation cessent immédiatement et la
                réalité reprend sa forme initiale. Dans ce cas, le sortilège
                échoue purement et simplement sans effets secondaires.
              </td>
            </tr>
            <tr>
              <td> 5 - 9 </td>
              <td>
                <strong>Condensation astrale.</strong> Le sort échoue dans un
                claquement sourd et la réalité entourant le magicien se déforme
                en se compressant comme pour se protéger de l'incursion d'une
                chose innomable. La densité d'éther augmente localement et le
                magicien ainsi que tous les personnages situés dans un rayon de
                6m autour de lui subissent un empoisonement équivalent à la
                concentration naturelle d'éther augmentée du bonus de pouvoir du
                magicien.
              </td>
            </tr>
            <tr>
              <td> 10 - 12 </td>
              <td>
                <strong>Éclatement d'éther.</strong> Le sort échoue dans un
                claquement sourd et la réalité entourant le magicien se déforme
                légèrement. Un des membres extérieurs du magicien commence alors
                à gonfler et bleuir. Au bout d'1d4 round le membre éclate dans
                une gerbe de chair et de sang ne laissant qu'un os et des restes
                de muscle déchirés. Le magicien tombe alors immédiatement dans
                le coma et est considéré comme ayant 0 points de vie et une
                blessure grave infectée à l'éther. Les personnages situés dans
                un rayon de 6m autour de l'explosion subissent un empoisonement
                équivalent à la concentration naturelle d'éther augmentée du
                bonus de pouvoir du magicien et doivent réaliser un test de
                volonté de DD15 pour ne pas perdre 1d10 points de volonté.
              </td>
            </tr>
            <tr>
              <td> 13 - 17 </td>
              <td>
                <strong>Explosion d'éther.</strong> Le sort échoue et la réalité
                se compresse rapidement et se redilate en une fraction de
                seconde provoquant une explosion d'éther. Le magicien ainsi que
                tous les personnages situés dans un rayon de 6m autour de lui
                subissent un empoisonement à l'éther d'1d6 points plus le bonus
                de pouvoir du magicien ainsi qu'1d6 points de dégâts bruts plus
                le bonus de pouvoir du magicien. Les dégâts et l'empoisonement
                sont toujours au minimum de 1 point. Si les dégâts subis
                dépassent 6 les personnages se voient infliger une blessure
                infectée à l'éther.
              </td>
            </tr>
            <tr>
              <td> 18 </td>
              <td>
                <strong>Le mille-yeux.</strong> Les milles-yeux sont frilland
                d'éther et rôdent aux frontière de la réalité attiré par l'odeur
                de nourriture. Votre incantation ratée à donner l'occasion à
                l'une de ces créature de se frayer un chemin jusqu'à vous et
                elle s'apprète à festoyer d'éther et de chair fraîche pour les
                prochains 2d6 tours.
              </td>
            </tr>
            <tr>
              <td> 19 </td>
              <td>
                <strong>Sètmétèr.</strong> Le coeur des tempêtes s'invite
                quelques instants dans ce plan profitant d'une brèche ouverte
                par l'incantation raté et provoque une tempête d'éther hors
                norme ainsi que l'apparitions d'égarés, ombres formés d'éther
                se nourrisant du souvenir des morts comme des vivants.
              </td>
            </tr>
            <tr>
              <td> 20 </td>
              <td>
                <strong>Le dévoreur.</strong> Le dévoreur n'est pas réputé pour
                être particulièrement vigilant, mais cette fois-ci, il vous a vu
                et il vient vous chercher pour vous emporter dans son plan
                cataclysmique. Le sol se brise et la terre tremble. Tous les
                personnages alentours perdent 2d10 points de volonté et 2d6
                points de vie bruts.
              </td>
            </tr>
          </tbody>
        </table>
      </SubjectContent>
    </Subject>
  )
}
