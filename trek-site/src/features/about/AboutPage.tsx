"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import dhruvImg from '@/assets/members/dhruv.webp'
import prabeshImg from '@/assets/members/prabesh.webp'
import divyaImg from '@/assets/members/divya.webp'
import sapnaImg from '@/assets/members/sapna.webp'

const teamMembers = [
  {
    name: 'Prabesh Thakuri',
    role: 'Senior Trekking Guide & High-Altitude Specialist',
    desc: 'A core pillar of Nepal Hiking Partner since the beginning. Prabesh has successfully led diverse international clients across almost every major trekking trail in Nepal. He is highly recommended for his calm demeanor and safety-first approach.',
    image: prabeshImg,
  },
  {
    name: 'Divya Dulal',
    role: 'Iconic Trekking Guide & Cultural Navigator',
    desc: 'Divya brings deep route knowledge across Everest, Annapurna, Manaslu, and Kanchenjunga. Her understanding of local culture helps every group experience the Himalayas with context and care.',
    image: divyaImg,
  },
  {
    name: 'Sapna Khadka',
    role: 'Administration & Guest Relations',
    desc: 'Sapna manages administration, communication, and guest coordination so every journey is smooth, practical, and stress-free from the first message.',
    image: sapnaImg,
  },
]

const values = [
  {
    title: 'Safety & Security',
    desc: 'Professional guides, proper protocols, and rigorous preparation for every trip.',
  },
  {
    title: 'Family Connection',
    desc: 'A client-first operating style built around trust, clarity, and personal care.',
  },
  {
    title: 'Women Empowerment',
    desc: 'Support for female trekking guides and safe environments for solo female travelers.',
  },
  {
    title: 'Sustainable Tourism',
    desc: 'Responsible travel that supports local communities and protects mountain regions.',
  },
]

export default function AboutPage() {
  const router = useRouter()

  return (
    <div className="bg-white">
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[0.56fr_0.44fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-neutral-500">About Nepal Hiking Partner</p>
            <h1 className="mt-4 text-5xl font-bold tracking-tight text-neutral-900 md:text-6xl">Local-led Himalayan travel with clear standards.</h1>
            <p className="mt-5 text-base leading-8 text-neutral-600">
              Nepal Hiking Partner is led by founder Dhurba Panthi, a licensed trekking guide with more than 10 years of mountain expertise. Since 2018, the team has built guided journeys around safety, cultural respect, and practical planning.
            </p>
          </div>
          <div className="border border-neutral-200 bg-white p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-neutral-500">Founder</p>
            <h2 className="mt-3 text-2xl font-bold text-neutral-900">Dhurba Panthi , Founder & Licensed Guide</h2>
            <div className="mt-4 lg:flex lg:items-start">
              <div className="flex-shrink-0">
                <Image src={dhruvImg} alt="Dhurba Panthi" width={96} height={96} className="h-24 w-24 rounded-full object-cover bg-neutral-100" />
              </div>
              <div className="mt-4 lg:mt-0 lg:ml-6">
                <p className="text-sm leading-7 text-neutral-600">
                  Dhurba Panthi is a licensed trekking guide with 10 years of mountain expertise. Guiding passionately since 2018, Dhurba leads the team in crafting safe, immersive, and well-organised Himalayan journeys for travellers worldwide.
                </p>

                  <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.12em] text-neutral-500">Base</div>
                    <div className="mt-1 text-sm font-bold text-neutral-900">Kathmandu</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.12em] text-neutral-500">Phone</div>
                    <div className="mt-1 text-sm font-bold text-neutral-900">+977-9843756464</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.12em] text-neutral-500">Email</div>
                    <div className="mt-1 text-sm font-bold text-neutral-900 whitespace-normal break-words">
                      <a href="mailto:dhurbapanthi@gmail.com" className="underline block w-full break-words">dhurbapanthi@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-2 lg:px-8">
        <article>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-neutral-500">Philosophy</p>
          <h2 className="mt-3 text-3xl font-bold text-neutral-900">Trekking should feel planned, grounded, and human.</h2>
          <p className="mt-5 text-base leading-8 text-neutral-600">
            The team designs routes with realistic pacing, altitude awareness, cultural context, and honest communication. Guests should understand the route before they commit, and they should feel supported while they are in the mountains.
          </p>
        </article>
        <article className="border-l-4 border-neutral-300 bg-neutral-50 p-6">
          <h2 className="text-2xl font-bold text-neutral-900">Sustainable Tourism</h2>
          <p className="mt-4 text-base leading-8 text-neutral-700">
            The company prioritizes local employment, responsible trail behavior, and experiences that benefit the communities travelers pass through.
          </p>
        </article>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-neutral-500">Values</p>
            <h2 className="mt-3 text-3xl font-bold text-neutral-900">Operating principles that shape each trip.</h2>
          </div>
          <div className="mt-8 grid gap-px bg-neutral-200 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <article key={value.title} className="bg-white p-6">
                <div className="text-sm font-bold text-neutral-400">{String(index + 1).padStart(2, '0')}</div>
                <h3 className="mt-8 text-xl font-bold text-neutral-900">{value.title}</h3>
                <p className="mt-4 text-sm leading-6 text-neutral-600">{value.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

          <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
          

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="md:col-span-3">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-neutral-500">Team</p>
                <h2 className="mt-3 text-3xl font-bold text-neutral-900">People behind the experience.</h2>
              </div>

              {teamMembers.map((member) => (
                <article key={member.name} className="border border-neutral-200 bg-white p-6">
                  <div className="h-14 w-14 overflow-hidden rounded-full border border-neutral-300 bg-neutral-50">
                    <Image
                      src={(member.image as any)}
                      alt={member.name}
                      width={56}
                      height={56}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-neutral-900">{member.name}</h3>
                  <p className="mt-2 text-sm font-bold text-neutral-500">{member.role}</p>
                  <p className="mt-4 text-sm leading-7 text-neutral-600">{member.desc}</p>
                </article>
              ))}
            </div>
          </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 lg:px-8">
        <div className="grid border border-neutral-200 bg-neutral-50 p-8 md:grid-cols-[1fr_auto] md:items-center md:gap-8">
          <div>
            <h2 className="text-3xl font-bold text-neutral-900">Explore treks with the team.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-600">
              Compare routes and choose a trek that matches your time, fitness, and travel style.
            </p>
          </div>
          <button
            type="button"
            onClick={() => router.push('/trek')}
            className="mt-6 border border-primary-600 bg-primary-600 px-7 py-4 text-sm font-bold text-white hover:bg-primary-700 md:mt-0"
          >
            Explore Treks
          </button>
        </div>
      </section>
    </div>
  )
}
