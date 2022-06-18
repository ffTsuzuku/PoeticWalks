import Graph from './Graph'

class ConcreteVerticesGraph implements Graph<string> {
    private readonly _verticies: Vertex[] = []

    // Abstraction function:
    //   TODO
    // Representation invariant:
    //   TODO
    // Safety from rep exposure:
    //   TODO

    // TODO constructor

    // TODO checkRep

    add(vertex: string): boolean {
        throw Error('Implement me!')
    }

    set(source: string, target: string, weight: number): number {
        throw Error('Implement me!')
    }

    remove(vertex: string): boolean {
        throw Error('Implement me!')
    }

    verticies(): Set<string> {
        throw Error('Implement me!')
    }

    sources(target: string): Map<string, number> {
        throw Error('Implement me!')
    }

    targets(source: string): Map<string, number> {
        throw Error('Implement me!')
    }

    toString(): string {
        throw Error('Implement me!')
    }
}

/**
 * TODO specification
 * Mutable.
 * This class is internal to the rep of ConcreteVerticesGraph.
 *
 * <p>PS2 instructions: the specification and implementation of this class is
 * up to you.
 */
class Vertex {
    // TODO fields
    // Abstraction function:
    //   TODO
    // Representation invariant:
    //   TODO
    // Safety from rep exposure:
    //   TODO
    // TODO constructor
    // TODO checkRep
    // TODO methods
    // TODO toString()
}

export default ConcreteVerticesGraph
