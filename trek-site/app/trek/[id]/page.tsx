import Trek from '../../../pages/Trek'

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return <Trek params={{ id }} />
}
