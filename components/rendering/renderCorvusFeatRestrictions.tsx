import { List } from "immutable"
import { CorvusConstraintFeatRestriction, CorvusFeatRestriction, CorvusPlainFeatRestriction } from "../../typescript/data"

/**
 * 
 */
function renderCorvusConstraintFeatRestrictionConstraint(value: CorvusConstraintFeatRestriction, index: number): React.ReactElement {
  return <div key={index} className='corvus-constraint-feat-restriction-constraint'>{ value.constraint }</div>
}

/**
 * 
 */
function renderCorvusConstraintFeatRestrictionTarget(value: CorvusConstraintFeatRestriction, index: number): React.ReactElement {
  return <div key={index} className='corvus-constraint-feat-restriction-target'>{ value.target }</div>
}

/**
 * 
 */
 function renderCorvusConstraintFeatRestrictions(restrictions: List<CorvusConstraintFeatRestriction>): React.ReactElement {
  return (
    <div className='corvus-feat-restriction corvus-constraint-feat-restrictions'>
      <div className='corvus-constraint-feat-restrictions-targets'>{ restrictions.map(renderCorvusConstraintFeatRestrictionTarget) }</div>
      <div className='corvus-constraint-feat-restrictions-constraints'>{ restrictions.map(renderCorvusConstraintFeatRestrictionConstraint) }</div>
    </div>
  )
}

/**
 * 
 */
function renderCorvusPlainFeatRestriction(value: CorvusPlainFeatRestriction, index: number): React.ReactElement {
  return <div key={index} className='corvus-feat-restriction corvus-plain-feat-restriction'>{ value.content }</div>
}

/**
 * 
 */
export function renderCorvusFeatRestrictions(context: List<CorvusFeatRestriction>): React.ReactElement {
  return (
    <div className='corvus-feat-restrictions'>
        { renderCorvusConstraintFeatRestrictions(context.filter(CorvusConstraintFeatRestriction.is)) }
        { context.filter(CorvusPlainFeatRestriction.is).map(renderCorvusPlainFeatRestriction) }
    </div>
  )
}