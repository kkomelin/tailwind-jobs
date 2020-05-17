import Head from 'next/head'
import Layout from '@/components/Layout'
import Header from '@/components/Header'
import { format } from 'date-fns'
import ClosingDateIcon from '../icons/closing-date.svg'
import EmploymentIcon from '../icons/employment.svg'
import LocationIcon from '../icons/location.svg'
import SalaryIcon from '../icons/salary.svg'

export default function JobPosting({ children, job: { metadata, body } }) {
  return (
    <Layout>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tailwindcss" />
        <meta name="twitter:title" content={`${metadata.title} – Tailwind Jobs`} />
        <meta name="twitter:description" content={metadata.subtitle} />
        <meta name="twitter:image" content="https://jobs.tailwindui.com/social.png" />
        <meta name="twitter:creator" content="@tailwindcss" />
        <meta property="og:url" content="https://jobs.tailwindui.com/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${metadata.title} – Tailwind Jobs`} />
        <meta property="og:description" content={metadata.subtitle} />
        <meta property="og:image" content="https://jobs.tailwindui.com/social.png" />
        <title>{metadata.title} - Tailwind Jobs</title>
      </Head>

      <div className="max-w-2xl lg:max-w-6xl mx-auto px-6 py-8">
        <Header />
      </div>
      <main className="max-w-2xl lg:max-w-6xl mx-auto px-6">
        <article className="border-t-2 border-gray-100 grid py-12 lg:grid-cols-3 lg:gap-16">
          <div className="hidden lg:block">
            <aside className="sticky top-6 rounded-lg bg-gray-50 p-8">
              <div className="-my-4 divide-y-2 divide-gray-100">
                <dl className="divide-y-2 divide-gray-100">
                  <div className="py-4">
                    <dt className="sr-only">Employment type</dt>
                    <dl className="flex items-start space-x-2 text-sm leading-5">
                      <EmploymentIcon className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-800">{metadata.jobType}</span>
                    </dl>
                  </div>
                  <div className="py-4">
                    <dt className="sr-only">Location</dt>
                    <dl className="flex items-start space-x-2 text-sm leading-5">
                      <LocationIcon className="h-5 w-5 text-gray-400" />
                      <div>
                        <div className="text-gray-800">{metadata.location[0]}</div>
                        {metadata.location[1] && (
                          <div className="text-gray-500">{metadata.location[1]}</div>
                        )}
                      </div>
                    </dl>
                  </div>
                  <div className="py-4">
                    <dt className="sr-only">Salary</dt>
                    <dl className="flex items-start space-x-2 text-sm leading-5">
                      <SalaryIcon className="h-5 w-5 text-gray-400" />
                      <div style={{ fontVariantNumeric: 'tabular-nums' }}>
                        <div className="text-gray-800">{metadata.salary[0]}</div>
                        <div className="text-gray-500">{metadata.salary[1]}</div>
                      </div>
                    </dl>
                  </div>
                  <div className="py-4">
                    <dt className="sr-only">Closing date</dt>
                    <dl className="flex items-start space-x-2 text-sm leading-5">
                      <ClosingDateIcon className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-800">
                        <span aria-hidden>Closes on</span>{' '}
                        <time dateTime={metadata.closes}>
                          {format(new Date(metadata.closes), 'MMM d, y')}
                        </time>
                      </span>
                    </dl>
                  </div>
                </dl>
                <div className="py-4">
                  <a
                    href={metadata.applyUrl}
                    className="inline-block rounded-md bg-gray-900 px-4 py-2.5 text-base leading-6 font-semibold text-white"
                  >
                    Apply for this job
                  </a>
                </div>
              </div>
            </aside>
          </div>
          <div className="col-span-2 space-y-12">
            <div className="space-y-8">
              <div className="space-y-2">
                <h1 className="text-3xl leading-9 font-bold text-gray-900 sm:text-4xl sm:leading-10">
                  {metadata.title}
                </h1>
                <p className="text-lg leading-7 text-gray-500">{metadata.subtitle}</p>
              </div>
              <div className="flow-root lg:hidden">
                <div className="-my-4">
                  <dl className="sm:grid sm:grid-cols-2">
                    <div className="py-4 border-b border-gray-100">
                      <dt className="sr-only">Employment type</dt>
                      <dl className="flex items-start space-x-2 text-sm leading-5">
                        <EmploymentIcon className="h-5 w-5 text-gray-400" />
                        <span className="text-gray-800">{metadata.jobType}</span>
                      </dl>
                    </div>
                    <div className="py-4 border-b border-gray-100">
                      <dt className="sr-only">Closing date</dt>
                      <dl className="flex items-start space-x-2 text-sm leading-5">
                        <ClosingDateIcon className="h-5 w-5 text-gray-400" />
                        <span className="text-gray-800">
                          <span aria-hidden>Closes on</span>{' '}
                          <time dateTime={metadata.closes}>
                            {format(new Date(metadata.closes), 'MMM d, y')}
                          </time>
                        </span>
                      </dl>
                    </div>
                    <div className="py-4 border-b border-gray-100">
                      <dt className="sr-only">Location</dt>
                      <dl className="flex items-start space-x-2 text-sm leading-5">
                        <LocationIcon className="h-5 w-5 text-gray-400" />
                        <div>
                          <div className="text-gray-800">{metadata.location[0]}</div>
                          {metadata.location[1] && (
                            <div className="text-gray-500">{metadata.location[1]}</div>
                          )}
                        </div>
                      </dl>
                    </div>
                    <div className="py-4 border-b border-gray-100">
                      <dt className="sr-only">Salary</dt>
                      <dl className="flex items-start space-x-2 text-sm leading-5">
                        <SalaryIcon className="h-5 w-5 text-gray-400" />
                        <div style={{ fontVariantNumeric: 'tabular-nums' }}>
                          <div className="text-gray-800">{metadata.salary[0]}</div>
                          {metadata.salary[1] && (
                            <div className="text-gray-500">{metadata.salary[1]}</div>
                          )}
                        </div>
                      </dl>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
            <div className="prose" dangerouslySetInnerHTML={{ __html: body }} />
            <div>
              <a
                href={metadata.applyUrl}
                className="inline-block rounded-md bg-gray-900 px-4 py-2.5 text-base leading-6 font-semibold text-white"
              >
                Apply for this job
              </a>
            </div>
          </div>
        </article>
      </main>
    </Layout>
  )
}
