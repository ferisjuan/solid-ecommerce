import { createResource, createSignal } from 'solid-js'
import { Product } from 'types'

export const [cart, setCart] = createSignal<Product[]>([])
export const onAddToCart = (p: Product)=>setCart(cart().concat(p))
export const onClearCart = () => setCart([])

export const [search, setSearch] = createSignal("")
export const onSetSearch = (s: string) => setSearch(s)

export const [products] = createResource<Product[]>(() =>
    fetch('https://fakestoreapi.com/products').then(res => res.json()),
    {
        initialValue: []
    }
)
