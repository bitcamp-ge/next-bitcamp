import { CheckIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    name: 'Front-End',
    id: 'tier-front',
    href: '#',
    priceMonthly: '100 ლარიდან',
    description: 'JavaScript, HTML, CSS, React.',
    features: [
        'პროგრამირების საფუძვლები', 
        'ვებ ტექნოლოგიების საფუძვლები', 
        'React და თანამედროვე ფრონტენდ აპლიკაციები', 
        '5 ეტაპიანი პროგრამა დავალებებითა და პროექტებით', 
        'კოლაბორაციული/გუნდური პროექტები',
        'სრულიად დისტანციური სასწავლო პროცესი',
        'Lite - 100 ლარი / თვეში',
        'PLUS - 200 ლარი / თვეში',
        'Mentor - 300 ლარი / თვეში (პირადი მენტორის აყვანა)',
        'მენტორის შერჩევა ან შეცვლა ნებისმიერ დროს'
    ],
  },
  {
    name: 'Python - Full Stack',
    id: 'tier-team',
    href: '#',
    priceMonthly: '100 ლარიდან',
    description: 'Python, Django, React.',
    features: [
        'პროგრამირების საფუძვლები', 
        'ვებ ტექნოლოგიების საფუძვლები', 
        'Django, Back-End, React, Front-End და თანამედროვე Full-Stack აპლიკაციები', 
        '5 ეტაპიანი პროგრამა დავალებებითა და პროექტებით', 
        'კოლაბორაციული/გუნდური პროექტები',
        'სრულიად დისტანციური სასწავლო პროცესი',
        'Lite - 100 ლარი / თვეში',
        'PLUS - 200 ლარი / თვეში',
        'Mentor - 300 ლარი / თვეში (პირადი მენტორის აყვანა)',
        'მენტორის შერჩევა ან შეცვლა ნებისმიერ დროს'
    ],
  },
  {
    name: 'PRO',
    id: 'tier-team',
    href: '#',
    priceMonthly: '900 ლარი',
    description: 'ერთადერთი სუპერ ინტენსიური Full Stack Bootcamp საქართველოში. პროგრამირების და ვების შესწავლის გარდა, მოგამზადებთ ევროპული და ამერიკული კომპანიებისთვის.',
    features: [
      'ვებ ტექნოლოგიების სრული სპექტრი',
      'პირადი მენტორი',
      'სამენტორო საათები - დღეში 10 საათი',
      'სტუდენტის მიმდინარე საჭიროებების მიხედვით მომზადებული ლექციები',
      '7 ეტაპიანი პროექტების სისტემა მზარდი კომპლექსურობით',
      'ფიზიკური შეხვედრები კვირაში ერთხელ',
      'მზადება გასაუბრებისთვის',
      'რეზიუმეს მომზადება',
      'ტექნიკური გასაუბრების იმიტაცია'
    ],
  },
]

export default function PricingHome() {
  return (
    <div className="isolate overflow-hidden bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 pb-96 text-center lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">სწავლა და ბრძოლა</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            BitCamp - ის სასწავლო პროგრამები
          </p>
        </div>
        <div className="relative mt-6">
          <p className="mx-auto max-w-2xl text-lg leading-8 text-white/60">
            შეარჩიე შენთვის სასურველი პროგრამა ან მოგვწერე და დაგეხმარებით შერჩევაში.
          </p>
          <svg
            viewBox="0 0 1208 1024"
            className="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0"
          >
            <ellipse cx={604} cy={512} fill="url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)" rx={604} ry={512} />
            <defs>
              <radialGradient id="6d1bd035-0dd1-437e-93fa-59d316231eb0">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="flow-root bg-white pb-24 sm:pb-32">
        <div className="-mt-80">
          <div className="mx-auto max-w-7xl px-3 lg:px-4">
            <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-7xl lg:grid-cols-3">
              {tiers.map((tier) => (
                <div
                  key={tier.id}
                  className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10"
                >
                  <div>
                    <h3 id={tier.id} className=" text-3xl font-semibold leading-7 text-indigo-600">
                      {tier.name}
                    </h3>
                    <div className="mt-4 flex items-baseline gap-x-2">
                      <span className="text-1xl font-bold tracking-tight text-gray-900">{tier.priceMonthly}</span>
                      <span className="text-base font-semibold leading-7 text-gray-600">/თვეში</span>
                    </div>
                    <p className="mt-6 text-base leading-7 text-gray-600">{tier.description}</p>
                    <ul role="list" className="mt-10 space-y-4 text-sm leading-6 text-gray-600">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={tier.href}
                    aria-describedby={tier.id}
                    className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    გაიარე კონსულტაცია
                  </a>

                  <a
                    href={tier.href}
                    aria-describedby={tier.id}
                    className="mt-4 block rounded-md bg-gray-500 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    სილაბუსი
                  </a>
                </div>
              ))}
              
            </div>
            <div className="flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 mt-10 ring-1 ring-gray-900/10 sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center">
                <div className="lg:min-w-0 lg:flex-1">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">სკოლის მოსწავლეთათვის</h3>
                  <p className="mt-1 text-base leading-7 text-gray-600">
                    <ul>
                        <li>პროგრამირების საზაფხულო სკოლა BitCamp - ში</li>
                        <li>მოსწავლეთა ჯგუფი Python - ის სამენტოროში</li>
                        <li>მოსწავლეთა ჯგუფი Front-End - ის სამენტოროში</li>
                    </ul>
                  </p>
                </div>
                <a
                  href="https://start.bitcamp.ge"
                  className="rounded-md px-3.5 py-2 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  გაიგე მეტი <span aria-hidden="true">&rarr;</span>
                </a>
              </div>

          <div className="flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 mt-10 ring-1 ring-gray-900/10 sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center">
                <div className="lg:min-w-0 lg:flex-1">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">უფასო პროგრამა</h3>
                  <p className="mt-1 text-base leading-7 text-gray-600">
                    თუ გსურთ თქვენი ტემპით, მენტორის გარეშე და ინგლისურენოვანი რესურსებით ისწავლოთ ვებ დეველოპმენტი, გთავაზობთ ჩვენს უფასო პროგრამას.
                  </p>
                </div>
                <a
                  href="https://start.bitcamp.ge"
                  className="rounded-md px-3.5 py-2 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  დაიწყე <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
