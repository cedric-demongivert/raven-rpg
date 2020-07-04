import React from 'react'
import { ReactElement } from 'react'
import { ReactNode } from 'react'

import { AlchemicMaterial } from '../../typescript/alchemy/AlchemicMaterial'
import { AlchemicTransformation } from '../../typescript/alchemy/AlchemicTransformation'

import { SubjectSummary } from '../subject/SubjectSummary'
import { SubjectContent } from '../subject/SubjectContent'
import { SubjectTitle } from '../subject/SubjectTitle'
import { SubjectKeyword } from '../subject/SubjectKeyword'
import { SubjectIdentifier } from '../subject/SubjectIdentifier'
import { Subject } from '../subject/Subject'

import { Data } from '../data/Data'

import { AlchemicTransformationList } from './AlchemicTransformationList'
import { AlchemicPropertiesHeader } from './AlchemicPropertiesHeader'
import { AlchemicProperty } from './AlchemicProperty'

export function AlchemicMaterialSubject (properties : AlchemicMaterialSubject.Properties) : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>{'alchemy-material-' + properties.children.identifier}</SubjectIdentifier>
      {
        [...properties.children.keywords].map(function (keyword : string, index : number) : ReactElement {
          return <SubjectKeyword key={index}>{keyword}</SubjectKeyword>
        })
      }
      <SubjectTitle>{properties.children.name}</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        {properties.children.description}

        <Data>
          { renderProperties(properties.children.properties) }
          { renderTransformations(properties.children.transformations) }
        </Data>
      </SubjectContent>
    </Subject>
  )
}

function renderProperties (properties : any[]) : ReactNode {
  if (properties == null || properties.length === 0) {
    return null
  }

  return (
    <>
      <Data.Header>Propriétés</Data.Header>
      <AlchemicPropertiesHeader />
      {
        properties.map(function (property : any, index : number) : ReactElement {
          return <AlchemicProperty key={index}>{property}</AlchemicProperty>
        })
      }
    </>
  )
}

function renderTransformations (transformations : any[]) : ReactNode {
  if (transformations == null || transformations.length === 0) {
    return null
  }

  return (
    <>
      <Data.Header>Transformations</Data.Header>
      <AlchemicTransformationList>{transformations}</AlchemicTransformationList>
    </>
  )
}

export namespace AlchemicMaterialSubject {
  export type Properties = {
    children : AlchemicMaterial
  }
}
