import TrekDetailPage from '@/features/treks/TrekDetailPage'

type PageProps = {
  params: Promise<{ id: string }>
}

export default function Page({ params }: PageProps) {
  return <TrekDetailPage params={params} />
}
