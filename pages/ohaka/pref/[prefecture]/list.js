import { useRouter } from 'next/router'

export default function Page() {
  const { asPath, route, query } = useRouter()

  return (
    <div>
      <div>
        <h1>Path: {asPath}</h1>
        <hr/>
        <p>
          This page was rendered by {`pages${route}.js`}.
        </p>
        <p>
          {JSON.stringify(query)}
        </p>
      </div>
    </div>
  )
}

export async function getStaticPaths(context) {
  return { paths: [], fallback: 'blocking' }
}

export async function getStaticProps(context) {
  return {
    props: {},
  }
}
