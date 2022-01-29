import type {
  // GetStaticPathsContext,
  // GetStaticPropsContext,
  // InferGetStaticPropsType,
  GetServerSidePropsContext,
  InferGetServerSidePropsType
} from 'next'
import { useRouter } from 'next/router'
import commerce from '@lib/api/commerce'
import { Layout } from '@leblanc/layouts'
import { ProductView } from '@leblanc/views'

export async function getServerSideProps({
  params,
  locale,
  locales,
  preview,
}: GetServerSidePropsContext<{ slug: string }>) {
  const config = { locale, locales }
  const pagesPromise = commerce.getAllPages({ config, preview })
  const siteInfoPromise = commerce.getSiteInfo({ config, preview })
  const productPromise = commerce.getProduct({
    variables: { slug: params!.slug },
    config,
    preview,
  })

  const allProductsPromise = commerce.getAllProducts({
    variables: { first: 4 },
    config,
    preview,
  })
  const { pages } = await pagesPromise
  const { categories } = await siteInfoPromise
  const { product } = await productPromise
  const { products: relatedProducts } = await allProductsPromise

  if (!product) {
    throw new Error(`Product with slug '${params!.slug}' not found`)
  }

  return {
    props: {
      pages,
      product,
      relatedProducts,
      categories,
    }
  }
}

// export async function getStaticPaths({ locales }: GetStaticPathsContext) {
//   const { products } = await commerce.getAllProductPaths()

//   return {
//     paths: locales
//       ? locales.reduce<string[]>((arr, locale) => {
//           // Add a product path for every locale
//           products.forEach((product: any) => {
//             arr.push(`/${locale}/product${product.path}`)
//           })
//           return arr
//         }, [])
//       : products.map((product: any) => `/product${product.path}`),
//     fallback: 'blocking',
//   }
// }

export default function Slug({
  product,
  relatedProducts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter()

  return router.isFallback ? (
    <h1>Loading...</h1>
  ) : (
    <ProductView product={product} relatedProducts={relatedProducts} />
  )
}

Slug.Layout = Layout
