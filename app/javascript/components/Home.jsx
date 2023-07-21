import React, { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import axios from 'axios';

const baseUrl = 'http://localhost:3000';

const handleSubmitPartySize = async (e, partySize) => {
    e.preventDefault();
    try {
        const response = await axios.post(`${baseUrl}/parties`, {
            party: {
                size: partySize
            }
        });
    } catch (error) { 
        setError(error);
    }
};

export default function Example() {
    const [partySize, setPartySize] = React.useState(0);
    const [error, setError] = React.useState(null);
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full">
        <div className="bg-gray-800 pb-32">
          <header className="py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-white">Syd's Resturaunt</h1>
            </div>
          </header>
        </div>

        <main className="-mt-32">
          <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
            <form>
                <div className="space-y-12">
                <div className="border-b border-white/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-white">Party Information</h2>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-white">
                    Enter Party Size
                    </label>
                    <div className="mt-2">
                    <input
                        onChange={(e) => setPartySize(e.target.value)}
                        value={partySize}
                        type="number"
                        name="party-size"
                        id="party-size"
                        min={1}
                        max={100}
                        className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>
                </div>
                </div>
                </div>
                <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                onClick={(e) => handleSubmitPartySize(e, partySize)}
                type="submit"
                className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                Save
                </button>
      </div>
            </form>
          </div>
        </main>
      </div>
    </>
  )
}
