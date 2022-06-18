import Graph from './Graph'

class ConcreteEdgesGraph implements Graph<string> {
    private readonly _verticies = new Set<string>()
    private readonly _edges: Edge[] = []
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
 * Immutable.
 * This class is internal to the rep of ConcreteEdgesGraph.
 *
 * <p>PS2 instructions: the specification and implementation of this class is
 * up to you.
 */
class Edge {
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

export default ConcreteEdgesGraph
