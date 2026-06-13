import { Suspense } from 'react'
import ConfirmClient from './ConfirmClient'

export default function Page() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-3xl px-5 py-12">Loading...</div>}>
      <ConfirmClient />
    </Suspense>
  )
}
