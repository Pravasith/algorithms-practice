export interface SinglyLinkedType<T> {
    head: Node<T>
    print: () => void
}

export interface Node<T> {
    data: T
    next: Node<T> | null
}

