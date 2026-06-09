export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[1fr_auto] md:items-end lg:px-8">
        <div>
          <div className="text-sm font-bold uppercase tracking-[0.18em] text-neutral-900">Nepal Hiking Partner</div>
          <p className="mt-3 max-w-xl text-sm leading-6 text-neutral-600">
            Guided treks, local retreats, and carefully planned Himalayan journeys from Kathmandu.
          </p>
          <p className="mt-4 text-xs text-neutral-500">© {currentYear} Nepal Hiking Partner. All rights reserved.</p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm font-medium text-neutral-600">
          <a className="hover:text-neutral-900" href="mailto:dhurbapanthi@gmail.com">Contact</a>
          <a className="hover:text-neutral-900" href="/about">About</a>
          <a className="hover:text-neutral-900" href="/trek">Treks</a>
        </div>
      </div>
    </footer>
  )
}
