import React, { Fragment, JSX } from 'react'
import axios from 'axios';
import { Navigate } from "react-router-dom";
import { baseUrl } from '../consts';
import { Layout } from './Layout';
import { UsersIcon, BarsArrowUpIcon, ExclamationCircleIcon } from '@heroicons/react/20/solid'

export default function HomePage() {
    const [partySize, setPartySize] = React.useState(1);
    const [error, setError] = React.useState(null);
    const [toShow, setToShow] = React.useState(null);

    const isPartySizeValid = (partySize) => {
      if (partySize < 1) {
        setError("Party size must be greater than 0");
        return true;
      } else {
        setError(null);
        return false;
      }
    };

    const handleSubmitPartySize = async (e, partySize) => {
        e.preventDefault();

        // guard clause on party size
        if (isPartySizeValid(partySize)) {
            return;
        }

        try {
            const response = await axios.post(`${baseUrl}/parties`, {
                party: {
                    size: partySize
                }
            });
            setToShow(response.data.id);
        } catch (error) { 
            setError(error);
        }
    };

    if (toShow) {
        return <Navigate to={`/parties/${toShow}`} />;
    }

    const renderInput = (hasError) => {
      if (hasError) {
        return (
        <>
            <div className="mt-2 flex rounded-md shadow-sm">
            <div className="relative flex flex-grow items-stretch focus-within:z-10">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
              </div>
              <input
                type="number"
                name="party-size"
                id="party-size"
                className="block w-full rounded-md rounded-l-md border-0 py-1.5 pl-10 text-red-900 ring-1 ring-inset ring-red-300 placeholder:text-red-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                placeholder="1"
                value={partySize}
                onChange={(e) => setPartySize(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              onClick={(e) => handleSubmitPartySize(e, partySize)}
            >
              <BarsArrowUpIcon className="-ml-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
              Seat Party
            </button>
          </div>
        <p className="mt-2 text-sm text-red-600" id="email-error">
          Party size must be greater than 0
        </p>
        </>
        );
      }

      return (
        <>
          <div className="mt-2 flex rounded-md shadow-sm">
            <div className="relative flex flex-grow items-stretch focus-within:z-10">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <UsersIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="number"
                name="party-size"
                id="party-size"
                className="block w-full rounded-md rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="1"
                value={partySize}
                onChange={(e) => setPartySize(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              onClick={(e) => handleSubmitPartySize(e, partySize)}
            >
              <BarsArrowUpIcon className="-ml-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
              Seat Party
            </button>
          </div>
        </>
      );
    };

  return (
    <>

    <Layout >
      <h1 className="text-3xl font-bold text-center text-gray-900">Syd's Resturaunt</h1>
    <div>
      <label htmlFor="party-size" className="block text-sm font-medium leading-6 text-gray-900">
        Enter the size of the party
      </label>
      {renderInput(error)}
    </div>

    </Layout>

    </>
  )
}
