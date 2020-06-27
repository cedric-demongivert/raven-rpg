import { IdentifierSet } from '@cedric-demongivert/gl-tool-collection'
import { Pack } from '@cedric-demongivert/gl-tool-collection'
import { PackSet } from '@cedric-demongivert/gl-tool-collection'
import { Sequence } from '@cedric-demongivert/gl-tool-collection'

import { Subject } from './Subject'

export class Document {
  /**
  * A set of allocated and available identifiers of the document.
  */
  private _identifiers : IdentifierSet

  /**
  * A set of subjects of the document.
  */
  private _subjects : Pack<Subject>

  /**
  * An ordered set of each subject that are a root of this document.
  */
  private _roots : PackSet<number>

  /**
  * A readonly view of the set of subjects of the document.
  */
  public readonly subjects : Sequence<Subject>

  /**
  * A readonly view of the set of subjects of the document.
  */
  public readonly roots : Sequence<number>

  /**
  * Instantiate a new empty document model.
  *
  * @param capacity - The capacity of the model to instantiate in subjects.
  */
  public constructor (capacity : number = 16) {
    this._identifiers = IdentifierSet.allocate(capacity)
    this._subjects    = Pack.any(capacity)
    this._roots       = PackSet.int32(16)
    this.subjects     = this._subjects.view()
    this.roots        = this._roots.view()
  }

  /**
  * Create and append a new subject into this document.
  *
  * @param [parent = -1] - Identifier of the parent subject of the subject to create.
  *
  * @return The new subject that was created.
  */
  public create (parent : number = -1) : Subject {
    if (parent == null) {
      return this.push(Subject.EMPTY)
    } else {
      const subject : Subject = new Subject()
      subject.parent = parent
      return this.push(subject)
    }
  }

  /**
  * Define the name of a subject.
  *
  * @param subject - Identifier of the subject to update.
  * @param name - The name to assign to the given subject.
  *
  * @throw Error If the given subject identifier is not assigned to an instance.
  * @throw Error If the subject to update already has a name.
  */
  public defineName (subject : number, name : string) : void {
    const index : number = this._identifiers.indexOf(subject)

    if (index < 0) {
      throw new Error(
        'Unable to define the name of the subject #' + subject + ' to "' +
        name + '" because no subject with the given identifier exists.'
      )
    } else {
      const newSubject : Subject = this._subjects.get(index).clone()

      if (newSubject.name == null) {
        newSubject.name = name
        this._subjects.set(index, newSubject)
      } else {
        throw new Error(
          'Unable to define the name of the subject #' + subject + ' to "' +
          name + '" because the subject already have a name that is "' +
          newSubject.name + '".'
        )
      }
    }
  }

  /**
  * Update the name of a subject.
  *
  * @param subject - Identifier of the subject to update.
  * @param name - The name to assign to the given subject.
  *
  * @throw Error If the given subject identifier is not assigned to an instance.
  * @throw Error If the subject to update does not already have a name.
  */
  public updateName (subject : number, name : string) : void {
    const index : number = this._identifiers.indexOf(subject)

    if (index < 0) {
      throw new Error(
        'Unable to update the name of the subject #' + subject + ' to "' +
        name + '" because no subject with the given identifier exists.'
      )
    } else {
      const newSubject : Subject = this._subjects.get(index).clone()

      if (newSubject.name == null) {
        throw new Error(
          'Unable to update the name of the subject #' + subject + ' to "' +
          name + '" because the subject does not already have a name.'
        )
      } else {
        newSubject.name = name
        this._subjects.set(index, newSubject)
      }
    }
  }

  /**
  * Delete the name of a subject.
  *
  * @param subject - Identifier of the subject to update.
  *
  * @throw Error If the given subject identifier is not assigned to an instance.
  * @throw Error If the subject to update does not already have a name.
  */
  public deleteName (subject : number) : void {
    const index : number = this._identifiers.indexOf(subject)

    if (index < 0) {
      throw new Error(
        'Unable to delete the name of the subject #' + subject +
        ' because no subject with the given identifier exists.'
      )
    } else {
      const newSubject : Subject = this._subjects.get(index).clone()

      if (newSubject.name == null) {
        throw new Error(
          'Unable to delete the name of the subject #' + subject +
          ' because the subject does not already have a name.'
        )
      } else {
        newSubject.name = null
        this._subjects.set(index, newSubject)
      }
    }
  }

  public defineKey (subject : number, key : string) : void {
    const index : number = this._identifiers.indexOf(subject)

    if (index < 0) {
      throw new Error(
        'Unable to define the key of the subject #' + subject + ' to "' +
        key + '" because no subject with the given identifier exists.'
      )
    } else {
      const newSubject : Subject = this._subjects.get(index).clone()

      if (newSubject.key == null) {
        newSubject.key = key
        this._subjects.set(index, newSubject)
      } else {
        throw new Error(
          'Unable to define the key of the subject #' + subject + ' to "' +
          key + '" because the subject already have a key that is "' +
          newSubject.key + '".'
        )
      }
    }
  }

  public updateKey (subject : number, key : string) : void {
    const index : number = this._identifiers.indexOf(subject)

    if (index < 0) {
      throw new Error(
        'Unable to update the key of the subject #' + subject + ' to "' +
        key + '" because no subject with the given identifier exists.'
      )
    } else {
      const newSubject : Subject = this._subjects.get(index).clone()

      if (newSubject.key == null) {
        throw new Error(
          'Unable to update the key of the subject #' + subject + ' to "' +
          key + '" because the subject does not already have a key.'
        )
      } else {
        newSubject.key = key
        this._subjects.set(index, newSubject)
      }
    }
  }

  public deleteKey (subject : number) : void {
    const index : number = this._identifiers.indexOf(subject)

    if (index < 0) {
      throw new Error(
        'Unable to delete the key of the subject #' + subject +
        ' because no subject with the given identifier exists.'
      )
    } else {
      const newSubject : Subject = this._subjects.get(index).clone()

      if (newSubject.key == null) {
        throw new Error(
          'Unable to delete the key of the subject #' + subject +
          ' because the subject does not already have a key.'
        )
      } else {
        newSubject.key = null
        this._subjects.set(index, newSubject)
      }
    }
  }

  public getParent (subject : Subject) : Subject {
    return this.get(subject.parent)
  }

  public * walkInChildren (
    subjects : Iterable<number | Subject> = this._roots
  ) : Iterable<Subject> {
    const stack : Subject[] = []

    for (const subject of subjects) {
      if (typeof subject === 'number') {
        stack.unshift(this.get(subject))
      } else {
        stack.unshift(subject)
      }
    }

    const cursors : number[] = [0]

    while (stack.length > 0 || stack.length > 20) {
      const current : Subject = stack[stack.length - 1]
      const cursor : number = cursors[cursors.length - 1]

      if (cursor < current.children.size) {
        const next : Subject = this.get(current.children.get(cursor))

        yield next

        stack.push(next)
        cursors[cursors.length - 1] += 1
        cursors.push(0)
      } else {
        stack.pop()
        cursors.pop()
      }
    }
  }

  /**
  * Push the given subject into this document.
  *
  * @param subject - A subject to push into the document.
  *
  * @return An updated version of the given subject model.
  */
  public push (subject : Subject) : Subject {
    const result : Subject = subject.clone()

    if (this._identifiers.capacity === this._identifiers.size) {
      this._identifiers.reallocate(this._identifiers.capacity * 2)
      this._subjects.reallocate(this._identifiers.capacity)
    }

    result.identifier = this._identifiers.next()
    this._subjects.push(result)

    this.updateNewSubjectParentChildrenRelationship(result)
    this.updateNewSubjectChildrenParentRelationship(result)

    return result
  }

  private updateNewSubjectParentChildrenRelationship (
    subject : Subject
  ) : void {
    if (subject.parent < 0) {
      this._roots.add(subject.identifier)
    } else {
      const parent : Subject = this.get(subject.parent).clone()
      parent.children.add(subject.identifier)
      this._update(parent)
    }
  }

  private updateNewSubjectChildrenParentRelationship (
    subject : Subject
  ) : void {
    for (const children of subject.children) {
      const newChildren : Subject = this.get(children).clone()
      const oldParent : number = newChildren.parent
      newChildren.parent = subject.identifier

      if (oldParent < 0) {
        this._roots.delete(children)
      } else {
        const oldParentInstance : Subject = this.get(oldParent).clone()
        oldParentInstance.children.delete(children)
        this._update(oldParentInstance)
      }

      this._update(newChildren)
    }
  }

  /**
  * Update an existing subject.
  *
  * @param subject - The new version of an existing subject.
  */
  public update (subject : Subject) : void {
    const index : number = this._identifiers.indexOf(subject.identifier)

    if (index < 0) {
      throw new Error(
        'Unable to update the subject #' + subject.identifier + ' because no ' +
        'subject with the given identifier exists into this document.'
      )
    } else {
      const oldSubject : Subject = this._subjects.get(index)

      this.updateParentChildrenRelationship(subject, oldSubject)
      this.updateChildrenParentRelationship(subject, oldSubject)
      this._subjects.set(index, subject)
    }
  }

  /**
  * Update an existing subject.
  *
  * @param subject - The new version of an existing subject.
  */
  public _update (subject : Subject) : void {
    const index : number = this._identifiers.indexOf(subject.identifier)
    this._subjects.set(index, subject)
  }

  /**
  * Update the children / parent relationship of an updated subject.
  */
  private updateChildrenParentRelationship (
    newSubject : Subject,
    oldSubject : Subject
  ) : void {
    for (const children of oldSubject.children) {
      if (!newSubject.children.has(children)) {
        const oldChildren : Subject = this.get(children).clone()
        oldChildren.parent = -1

        this._update(oldChildren)
        this._roots.add(children)
      }
    }

    for (const children of newSubject.children) {
      if (!oldSubject.children.has(children)) {
        const newChildren : Subject = this.get(children).clone()
        const oldParent : number = newChildren.parent
        newChildren.parent = newSubject.identifier

        if (oldParent < 0) {
          this._roots.delete(children)
        } else {
          const oldParentInstance : Subject = this.get(oldParent).clone()
          oldParentInstance.children.delete(children)
          this._update(oldParentInstance)
        }

        this._update(newChildren)
      }
    }
  }

  /**
  * Update the parent / children relationship of an updated subject.
  */
  private updateParentChildrenRelationship (
    newSubject : Subject,
    oldSubject : Subject
  ) : void {
    if (oldSubject.parent !== newSubject.parent) {
      if (oldSubject.parent < 0) {
        this._roots.delete(oldSubject.identifier)
      } else {
        const oldParent : Subject = this.get(oldSubject.parent).clone()
        oldParent.children.delete(oldSubject.identifier)
        this._update(oldParent)
      }

      if (newSubject.parent < 0) {
        this._roots.add(newSubject.identifier)
      } else {
        const newParent : Subject = this.get(newSubject.parent).clone()
        newParent.children.add(newSubject.identifier)
        this._update(newParent)
      }
    }
  }

  /**
  * Return the depth of a subject into this document.
  *
  * @param subject - A subject to check.
  *
  * @return The depth of the given subject into this document.
  */
  public getDepth (subject : Subject) : number {
    let result : number = 0
    let current : Subject = subject

    while (current.parent >= 0) {
      result += 1
      current = this.get(current.parent)
    }

    return result
  }

  /**
  * Search and return a subject of this document by using it's identifier.
  *
  * @param identifier - Identifier of the subject to search.
  *
  * @return The subject with the given identifier.
  */
  public get (identifier : number) : Subject {
    const index : number = this._identifiers.indexOf(identifier)
    return index < 0 ? undefined : this._subjects.get(index)
  }

  /**
  * @return A new instance of document model that is a copy of this one.
  */
  public clone () : Document {
    const result : Document = new Document(this._identifiers.capacity)

    result._identifiers.copy(this._identifiers)
    result._subjects.copy(this._subjects)
    result._roots.copy(this._roots)

    return result
  }

  /**
  * Attach the given subject to the given parent.
  *
  * @param subject - The subject to attach to a parent.
  * @param parent - The parent subject.
  */
  /*
  public attach (subject : Subject, parent : Subject) : void {
    if (subject.parent >= 0) {
      const oldParent : Subject = this.get(subject.parent)

      oldParent.children.delete(subject.identifier)
      subject.parent = -1
    }

    if (parent) {
      parent.children.add(subject.identifier)
      subject.parent = parent.identifier
      this._roots.delete(subject.identifier)
    } else {
      this._roots.add(subject.identifier)
    }
  }
  */

  /**
  * Detach the given subject from it's current parent.
  *
  * @param subject - The subject to detach.
  */
  /*
  public detach (subject : Subject) {
    this.attach(subject, null)
  }
  */

  /**
  * @see Object.equals
  */
  public equals (other : any) : boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof Document) {
      return this._identifiers.equals(other._identifiers) &&
             this._subjects.equals(other._subjects) &&
             this._roots.equals(other._roots)
    }

    return false
  }
}
