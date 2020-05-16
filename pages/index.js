import Head from 'next/head'
import Link from 'next/link'
import { format } from 'date-fns'
import Layout from '@/components/Layout'
import Header from '@/components/Header'
import { allJobs } from '@/lib/job-queries'

export async function getStaticProps() {
  return {
    props: {
      jobs: await allJobs(),
    },
  }
}

function JobCard({ job: { metadata } }) {
  return (
    <div className="block rounded-lg shadow-sm">
      <div className="flex justify-between items-center rounded-lg px-6 py-4 shadow-xs bg-white">
        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-lg leading-7 font-semibold text-teal-600">{metadata.title}</h3>
            <p className="text-gray-500">{metadata.subtitle}</p>
          </div>
          <dl className="space-y-4 md:flex md:space-y-0 md:space-x-6">
            <div>
              <dt className="sr-only">Employment type</dt>
              <dl className="flex items-start space-x-2 text-sm leading-5">
                <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  ></path>
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                </svg>
                <span className="text-gray-600">{metadata.jobType}</span>
              </dl>
            </div>
            <div>
              <dt className="sr-only">Location</dt>
              <dl className="flex items-start space-x-2 text-sm leading-5">
                <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  ></path>
                </svg>
                <div>
                  <div className="text-gray-600">{metadata.location[0]}</div>
                </div>
              </dl>
            </div>
            <div>
              <dt className="sr-only">Salary</dt>
              <dl className="flex items-start space-x-2 text-sm leading-5">
                <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                  <path
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  ></path>
                </svg>
                <div className="text-gray-600">{metadata.salary[0]}</div>
              </dl>
            </div>
            <div>
              <dt className="sr-only">Closing date</dt>
              <dl className="flex items-start space-x-2 text-sm leading-5">
                <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  ></path>
                </svg>
                <span className="text-gray-600">
                  <span aria-hidden>Closes on</span>{' '}
                  <time dateTime={metadata.closes}>
                    {format(new Date(metadata.closes), 'MMM d, y')}
                  </time>
                </span>
              </dl>
            </div>
          </dl>
        </div>
        <div className="hidden md:block">
          <svg
            className="h-6 w-6 text-gray-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M9 5l7 7-7 7"></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default function JobPosting({ jobs }) {
  return (
    <Layout>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tailwindcss" />
        <meta name="twitter:title" content="Tailwind Jobs" />
        <meta
          name="twitter:description"
          content="Help us build the future of Tailwind CSS and Tailwind UI."
        />
        <meta name="twitter:image" content="https://jobs.tailwindui.com/social.png" />
        <meta name="twitter:creator" content="@tailwindcss" />
        <meta property="og:url" content="https://jobs.tailwindui.com/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Tailwind Jobs" />
        <meta
          property="og:description"
          content="Help us build the future of Tailwind CSS and Tailwind UI."
        />
        <meta property="og:image" content="https://jobs.tailwindui.com/social.png" />
        <title>Tailwind Jobs</title>
      </Head>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <Header />
      </div>
      <div className="bg-gray-50">
        <main className="max-w-6xl mx-auto px-6">
          <div className="py-8 space-y-10">
            <h1 className="text-3xl leading-9 font-bold text-gray-900">Job Postings</h1>
            <div>
              <ul className="space-y-4">
                {jobs.map((job) => {
                  return (
                    <li key={job.path}>
                      <Link href="/[job]" as={`/${job.path}`}>
                        <a>
                          <JobCard job={job} />
                        </a>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  )
}
