import { Table } from '../../data/table/Table'

import { OneToOne } from '../../data/relationship/OneToOne'

import { Resource } from '../resource/Resource'
import { ResourceAddress } from '../resource'
import { Reference } from '../../data/Reference'
import { Entry } from '../../data/Entry'
import { Commit } from '../git/Commit'

/**
*
*/
export class ResourceCollection {
  /**
  *
  */
  public readonly all: Table<Resource>

  /**
  *
  */
  public readonly byAddress: OneToOne<ResourceAddress, Resource>

  /**
  *
  */
  public static EMPTY: ResourceCollection = new ResourceCollection()

  /**
  *
  */
  public static empty(): ResourceCollection {
    return ResourceCollection.EMPTY
  }

  /**
   * 
   */
  public static create(all: Table<Resource> = Table.EMPTY): ResourceCollection {
    return all.isEmpty() ? ResourceCollection.EMPTY : new ResourceCollection(all)
  }

  /**
  *
  */
  private constructor(all: Table<Resource> = Table.EMPTY) {
    this.all = all
    this.byAddress = all.indexBy(ResourceCollection.compareAddresses)
  }

  /**
   * 
   */
  public get(commit: Reference<Commit>, path: string): Entry<Resource> | undefined {
    return this.byAddress.get(ResourceAddress.create(commit, path))
  }

  /**
   * 
   */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof ResourceCollection) {
      return other.all.equals(this.all)
    }
  }
}

/**
*
*/
export namespace ResourceCollection {
  /**
   * 
   */
  export function compareAddresses(left: Resource | ResourceAddress, right: Resource): number {
    if (left instanceof ResourceAddress) {
      return ResourceAddress.compare(left, right.address)
    } else {
      return ResourceAddress.compare(left.address, right.address)
    }
  }
}
