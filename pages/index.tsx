import Image from 'next/image'
import { Layout, Link } from '@vercel/examples-ui'
import { GetStaticProps } from 'next'
import { Props } from '../types'




export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      product: {
        id: "lifestyle-705",
        title: "705 Lifestyle",
        images: ['/bottle.jpg', '/eco-bottle.jpg', '/los-angeles.jpg', '/plain-t.jpg', '/tolstovka.jpg', '/gray-tolstovka.jpg', '/tshirt-pack.jpg', '/plain-t-pack.jpg'],
        price: 150,
        stock: 5,
        name: "705 Lifestyle",
        description: "Experience sophistication with the 705 Lifestyle. From timeless designs to cutting-edge innovations, explore curated fashion and lifestyle products that redefine elegance.",
        features: "Discover superior quality and unmatched style with the 705 Lifestyle Collection. Each item is a statement of refined taste and enduring elegance.",
        action: "Discover Now",
        blurDataUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8+O3bJwAJjgPRHQFbMgAAAABJRU5ErkJggg==",
      },
    },
  }
}


function Home({ product }: Props) {
  return (
    <div className="min-h-screen h- bg-black text-white  flex items-center justify-center">
      <div className="p-8  max-w-2xl text-center">
        <div className="mb-16 grid grid-cols-2 grid-rows-2 gap-4" >

          {product.images.map((i, index) => (
            <div key={`container-${index}`}>
              <Image
                key={`img-${index}`}
                priority={index < 2}
                placeholder={"blur"}
                blurDataURL={product.blurDataUrl}
                src={i}
                alt={i}
                width={320}
                height={320}
                className="rounded-md mx-auto"
              />
              <h1 className="text-xl font-bold mt-2">${10 + index * 5}</h1>
            </div>
          )
          )}
        </div>
        <article>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="p-4 text-lg mb-4">{product.description}</p>
          <Link href={"https://sevenzerofive.com/"}>
            <button className=" bg-white text-black py-2 px-4 rounded-md hover:bg-neutral-100 focus:outline-none focus:shadow-outline-green active:bg-neutral-200">
              {product.action}
            </button>
          </Link>
        </article>
      </div>
    </div>
  )
}

Home.Layout = Layout

export default Home
