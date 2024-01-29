export interface Product {
    id: string
    title: string
    description: string
    images: string[],
    price: string
    stock: number,
    name: string,
    design: string,
    features: string,
    action: string,
    blurDataUrl: string;
}

export interface Props {
    product: Product
}