import Image from 'next/image'
import { Layout, Link } from '@vercel/examples-ui'
import { GetStaticProps } from 'next'


interface Product {
  id: string
  title: string
  description: string
  images: string[],
  price: string
  stock: number,
  name: string,
  design: string,
  features: string,
  action: string;
}

interface Props {
  product: Product
}


export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      product: {
        id: 'flask-705',
        title: '705 Flask',
        images: ['/los-angeles.jpg', '/plain-t.jpg', '/bottle.jpg ', '/eco-bottle.jpg', '/tolstovka.jpg', '/gray-tolstovka.jpg', '/tshirt-pack.jpg', '/plain-t-pack.jpg'],
        price: 150,
        stock: 5,
        name: "Vacuum Flask",

        description: "Experience perfection with the 705 Vacuum Flask. A sleek black design and cutting-edge insulation redefine on-the-go luxury.",
        features: "Superior insulation, leak-proof, and effortlessly chic. The 705 Vacuum Flask is more than a beverage companion; it's an expression of your refined taste.",
        action: "Order Now"
      },
    },
  }
}


function Home({ product }: Props) {
  return (
    <div className="min-h-screen h- bg-black text-white  flex items-center justify-center">
      <div className="p-8 max-w-2xl text-center">
        <div className="mb-4 inline-grid grid-cols-2 grid-rows-2 gap-4" >

          {product.images.map((i, index) => (
            <Image
              key={`img-${index}`}
              priority={true}
              placeholder={"blur"}
              blurDataURL={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8+O3bJwAJjgPRHQFbMgAAAABJRU5ErkJggg=="}
              src={i}
              alt={product.name}
              width={320}
              height={320}
              className="rounded-md mx-auto"
            />
          )
          )}
        </div>
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <p className="p-4 text-lg mb-4">{product.description}</p>
        <Link href={'https://unsplash.com/photos/white-and-black-vacuum-flask-371ROS34quI'}>
          <button className=" bg-white text-black py-2 px-4 rounded-md hover:bg-neutral-100 focus:outline-none focus:shadow-outline-green active:bg-neutral-200">
            {product.action}
          </button>
        </Link>

      </div>
    </div>
  )
}

Home.Layout = Layout

export default Home




// style={`

//         display: inline-grid;
//         grid-template-columns: 1fr 1fr 1fr 1fr;
//         grid-template-rows: 50% 50%;
//         grid-column-gap: 1rem;
//         // grid-row-gap: 1rem; */}