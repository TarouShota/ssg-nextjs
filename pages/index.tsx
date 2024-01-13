import Image from 'next/image'
import { Layout, Text, Page, Code, Link, List } from '@vercel/examples-ui'
import { GetStaticProps } from 'next'
import useSWR from 'swr'
import { useEffect, useState } from 'react'

interface Product {
  id: string
  title: string
  description: string
  image: string
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

const fetcher = (input: RequestInfo, init?: RequestInit) =>
  fetch(input, init).then((res) => res.json())

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      product: {
        id: 'flask-997',
        title: '997 Flask',
        image: '/bottle.jpg',
        price: 150,
        stock: 5,
        name: "997 Vacuum Flask",

        description: "Experience perfection with the 997 Vacuum Flask. A sleek black design and cutting-edge insulation redefine on-the-go luxury.",
        features: "Superior insulation, leak-proof, and effortlessly chic. The 997 Vacuum Flask is more than a beverage companion; it's an expression of your refined taste.",
        action: "Order Now"
      },
    },
  }
}

function ProductCard({ product }: Props) {
  const [isAdded, toggleAdded] = useState<boolean>(false)
  const { data: stock } = useSWR(`/api/product/${product.id}/stock`, fetcher, {
    refreshInterval: 5000,
  })
  const isLoading = stock === undefined

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isAdded) {
      timeout = setTimeout(() => {
        toggleAdded(false)
      }, 1000)
    }

    return () => clearTimeout(timeout)
  }, [isAdded])

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="ml-14 lg:ml-24 -mb-40 lg:-mb-56">
        <Image
          className="pointer-events-none"
          alt={product.title}
          src={product.image}
          width="440"
          height="440"
          layout="responsive"
        />
      </div>
      <section className="border border-gray-300 bg-white rounded-lg shadow-lg mt-16 w-full hover:shadow-2xl transition pt-16 lg:pt-24">
        <div className="p-4 flex flex-col justify-center items-center border-b">
          <div className="flex justify-between w-full items-baseline">
            <div className="ml-4 mr-auto text-left flex flex-col">
              <h4 className="font-semibold text-xl">{product.title}</h4>
              <h5 className="text-gray-700">
                {product.description} {isLoading ? `` : `(${stock} left)`}
              </h5>
            </div>
            <h4 className="font-bold text-lg">USD {product.price}</h4>
          </div>
        </div>
        <div className="p-4 gap-4 flex flex-col justify-center items-center border-b">
          {isLoading ? (
            <a
              role="button"
              className="py-4 px-6 text-lg w-full bg-gray-500 cursor-not-allowed disabled text-center text-white rounded-md"
            >
              Loading...
            </a>
          ) : (
            <>
              {isAdded ? (
                <a
                  role="button"
                  className="py-4 px-6 text-lg w-full bg-green-500 text-center text-white rounded-md"
                >
                  Added!
                </a>
              ) : (
                <>
                  {stock > 0 ? (
                    <a
                      role="button"
                      onClick={() => toggleAdded(true)}
                      className="py-4 px-6 text-lg w-full bg-black text-center text-white hover:text-white rounded-md hover:bg-gray-900"
                    >
                      Add to cart
                    </a>
                  ) : (
                    <a
                      role="button"
                      className="py-4 px-6 text-lg w-full bg-gray-500 cursor-not-allowed disabled text-center text-white rounded-md"
                    >
                      No stock available
                    </a>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  )
}





// function Home2() {
//   return (

//   )
// }







function Home({ product }: Props) {
  return (
    <div className="min-h-screen h-full bg-black text-white  flex items-center justify-center">
      <div className="max-w-2xl text-center">
        <div className="mb-4">
          {/* Adjust the width and height values as needed */}
          <Image
            src={product.image}
            alt={product.name}
            width={320}
            height={320}
            className="rounded-md mx-auto"
          />
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
