import { UnidocKissValidator } from "@cedric-demongivert/unidoc"

/**
*
*/
export type CommandListElement = {
  name: string | undefined,
  minimum: number,
  maximum: number,
  validator: UnidocKissValidator.Factory,
  anywhere: boolean
}

/**
*
*/
export namespace CommandListElement {
  /**
  *
  */
  export function command(name: string, validator: UnidocKissValidator.Factory, minimum: number = 0, maximum: number = Number.POSITIVE_INFINITY): CommandListElement {
    return {
      name,
      minimum,
      maximum,
      validator,
      anywhere: false
    }
  }

  /**
  *
  */
  export function manyCommand(name: string, validator: UnidocKissValidator.Factory): CommandListElement {
    return {
      name,
      minimum: 0,
      maximum: Number.POSITIVE_INFINITY,
      validator,
      anywhere: false
    }
  }

  /**
  *
  */
  export function optionalCommand(name: string, validator: UnidocKissValidator.Factory): CommandListElement {
    return {
      name,
      minimum: 0,
      maximum: 1,
      validator,
      anywhere: false
    }
  }

  /**
  *
  */
  export function requiredCommand(name: string, validator: UnidocKissValidator.Factory): CommandListElement {
    return {
      name,
      minimum: 1,
      maximum: 1,
      validator,
      anywhere: false
    }
  }

  /**
  *
  */
  export function content(validator: UnidocKissValidator.Factory, minimum: number = 0, maximum: number = Number.POSITIVE_INFINITY): CommandListElement {
    return {
      name: undefined,
      minimum,
      maximum,
      validator,
      anywhere: false
    }
  }

  /**
  *
  */
  export function optionalContent(validator: UnidocKissValidator.Factory): CommandListElement {
    return {
      name: undefined,
      minimum: 0,
      maximum: 1,
      validator,
      anywhere: false
    }
  }

  /**
  *
  */
  export function requiredContent(validator: UnidocKissValidator.Factory): CommandListElement {
    return {
      name: undefined,
      minimum: 1,
      maximum: 1,
      validator,
      anywhere: false
    }
  }

  /**
  *
  */
  export namespace anywhere {
    /**
    *
    */
    export function command(name: string, validator: UnidocKissValidator.Factory, minimum: number = 0, maximum: number = Number.POSITIVE_INFINITY): CommandListElement {
      return {
        name,
        minimum,
        maximum,
        validator,
        anywhere: true
      }
    }

    /**
    *
    */
    export function manyCommand(name: string, validator: UnidocKissValidator.Factory): CommandListElement {
      return {
        name,
        minimum: 0,
        maximum: Number.POSITIVE_INFINITY,
        validator,
        anywhere: true
      }
    }

    /**
    *
    */
    export function optionalCommand(name: string, validator: UnidocKissValidator.Factory): CommandListElement {
      return {
        name,
        minimum: 0,
        maximum: 1,
        validator,
        anywhere: true
      }
    }

    /**
    *
    */
    export function requiredCommand(name: string, validator: UnidocKissValidator.Factory): CommandListElement {
      return {
        name,
        minimum: 1,
        maximum: 1,
        validator,
        anywhere: true
      }
    }

    /**
    *
    */
    export function content(validator: UnidocKissValidator.Factory, minimum: number = 0, maximum: number = Number.POSITIVE_INFINITY): CommandListElement {
      return {
        name: undefined,
        minimum,
        maximum,
        validator,
        anywhere: true
      }
    }

    /**
    *
    */
    export function manyContent(validator: UnidocKissValidator.Factory): CommandListElement {
      return {
        name: undefined,
        minimum: 0,
        maximum: Number.POSITIVE_INFINITY,
        validator,
        anywhere: true
      }
    }

    /**
    *
    */
    export function optionalContent(validator: UnidocKissValidator.Factory): CommandListElement {
      return {
        name: undefined,
        minimum: 0,
        maximum: 1,
        validator,
        anywhere: true
      }
    }

    /**
    *
    */
    export function requiredContent(validator: UnidocKissValidator.Factory): CommandListElement {
      return {
        name: undefined,
        minimum: 1,
        maximum: 1,
        validator,
        anywhere: true
      }
    }
  }
}
