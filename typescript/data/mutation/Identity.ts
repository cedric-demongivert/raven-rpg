import { Mutation } from './Mutation'
import { MutationType } from './MutationType'

/**
 * 
 */
export interface Identity<Model> {
    /**
     * 
     */
    readonly type: MutationType.IDENTITY

    /**
     * 
     */
    readonly previous: Model

    /**
     * 
     */
    readonly next: Model

    /**
     * 
     */
    toString(): string

    /**
     * 
     */
    equals(other: any): boolean
}

/**
 *
 */
export namespace Identity {
    /**
     * 
     */
    export type Properties<Model> = {
        /**
         * 
         */
        type: MutationType.IDENTITY,

        /**
         * 
         */
        previous: Model,

        /**
         * 
         */
        next: Model
    }

    /**
     * 
     */
    export function is<Model>(mutation: Mutation<Model>): mutation is Identity<Model> {
        return mutation.type === MutationType.IDENTITY
    }

    /**
     * 
     */
    export function assert<Model>(mutation: Mutation<Model>, message?: string | undefined): asserts mutation is Identity<Model> {
        if (mutation.type !== MutationType.IDENTITY) {
            throw new Error(message || 'The given mutation is not an identity mutation.')
        }
    }
}