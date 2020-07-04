import React from 'react'

import { Unit } from '../../../../components/Unit'

import { AlchemicMaterial } from '../../../alchemy/AlchemicMaterial'
import { AlchemicProperty } from '../../../alchemy/AlchemicProperty'

export const MorpheaNectar : AlchemicMaterial = (
  AlchemicMaterial
    .builder()
    .setName('Nectar de morphée')
    .setIdentifier('morphea-nectar')
    .setDescription(
      <>
        <p>
          Le nectar de morphée, aussi appellée sirop de songétoile, est le
          résultat de la macération de songétoile préalablement broyée et dissoute
          dans l'eau. Cette solution nécéssite au minimum 2 semaines de
          macération. Ce liquide syrupeux de couleur violacée sombre est un
          somnifère particulièrement puissant quand il est préparé par des mains
          de maîtres. Cependant le sommeil provoqué par le nectar de morphée est
          loin d'être réparateur car celui-ci est parsemés de visions et de
          délires que l'on dit en relation avec l'avenir, le présent et le futur.
          Le nectar de morphée à longtemps été une lubie des oracles en tout
          genre mais à vite perdu de sa popularité quand ses effets dévastateurs
          pour la santé ont été découvert.
        </p>

        <p>
          <strong>Somnifère.</strong> Cet élément provoque une grande fatigue
          menant à l'assoupissement de la victime si celle-ci n'a pas la
          volonté requise pour rester éveillée. La victime d'un somnifère doit
          réaliser un jet d'opposition de volonté de degré de difficulté
          équivalent à la qualité du produit divisé par deux.
        </p>

        <p>
          <strong>Errance de l'oracle.</strong> Le personnage est sujet à des
          visions violentes de sujets passés, présents ou futurs mélangés à ses
          propres peurs ou souvenirs inconscients. Si le personnage est sujet à
          un somnifère il ne peut que subir les effets de l'errance de l'oracle
          et se réveillera toujours fatigué au petit matin. Un personnage qui
          n'est pas sous l'effet d'un somnifère peut tenter d'orienter ses
          divagations vers un sujet qui l'intéresse en réalisant un test
          d'auto-résolution basé sur sa volonté indiquant alors la qualité du
          rêve auquel il aura droit. Les effets de l'errance de l'oracle peuvent
          être stoppés net avec un calmant, mais le personnage s'endormira alors
          pour 1D6 heures minimum.
        </p>

        <table className="table-1d table-vertical">
          <thead>
            <tr>
              <th style={{width: '100px'}}> Qualité </th>
              <th style={{width: '300px'}}> Effet </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> ≤ 6 </td>
              <td>
                Une telle qualité ne garantit aucunement que le rêve traitera du
                sujet demandé.
              </td>
            </tr>
            <tr>
              <td> ≤ 10 </td>
              <td>
                Garantit que le rêve tiendra compte de la formulation du sujet
                demandé seulement mais pas de l'intention du rêveur. Avec cette
                qualité le rêve sera toujours particulièrement énigmatique.
              </td>
            </tr>
            <tr>
              <td> ≤ 15 </td>
              <td>
                Le rêve tiendra compte de l'intention du rêveur mais répondra
                toujours de manière très énigmatique en échangeant des
                personnages avec des connaissances du rêveur, en modifiant les
                lieux, en modifiant les paroles ou les actes, en désactivant un
                sens.
              </td>
            </tr>
            <tr>
              <td> ≤ 20 </td>
              <td>
                Le rêve tiendra compte de l'intention du rêveur et la scène sera
                complète mais toujours relativement énigmatique. Il semble
                évident qu'un songe de cette qualité doive apporter au moins une
                réponse raisonable ne nécéssitant pas d'exercice
                d'interprétation supplémentaire.
              </td>
            </tr>
            <tr>
              <td> 21+ </td>
              <td>
                A ce niveau de qualité le rêveur obtient la réponse qu'il désir,
                la scène peut toujours faire jouer des connaissances de celui-ci
                à la place des vrais personnages mais les liens entre les
                acteurs, les lieux et la réalité sont évident.
              </td>
            </tr>
          </tbody>
        </table>
      </>
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Somnifère</>)
        .setCost(1)
        .setDuration(<>10<Unit>m</Unit> × Qa</>)
        .build()
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Constitution -2</>)
        .setCost(0)
        .setDuration(<>5<Unit>m</Unit> × Qa</>)
        .build()
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Errance de l'oracle</>)
        .setCost(1)
        .setDuration(<>5<Unit>m</Unit> × Qa</>)
        .build()
    )
    .build()
)
