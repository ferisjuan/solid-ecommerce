import { createResource, createSignal } from 'solid-js'
import { createMutable } from "solid-js/store"
import { Product } from 'types'

export const cart = createMutable({
    products: JSON.parse(window.localStorage.getItem('cart') || '[]'),
    get total() {
        return this.products.reduce((total: number, product: Product) => total + product.price, 0)
    },
    addToCart(product: Product) {
        this.products.push(product)
        window.localStorage.setItem('cart', JSON.stringify(this.products))
    },
    clearCart() {
        this.products = []
        window.localStorage.setItem('cart', JSON.stringify(this.products))
    },
})

export const [search, setSearch] = createSignal("")
export const onSetSearch = (s: string) => setSearch(s)

export const [products] = createResource<Product[]>(() =>
    fetch('https://fakestoreapi.com/products').then(res => res.json()),
    {
        initialValue: []
    }
)
