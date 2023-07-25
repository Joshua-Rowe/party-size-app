import React from "react";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes,
    useParams,
  } from "react-router-dom";
import { getParty } from "../api/getParty";
import { Layout } from "./Layout";

export const ShowPartySizeCount = () => {
    const { id } = useParams();
    const [party, setParty] = React.useState({});

    React.useEffect(() => {
        const getPartyAndSetParty = (id) => {
            getParty(id).then((response) => {
                setParty(response.data);
            });
        };

        getPartyAndSetParty(id);
    }, []);
    return (
        <Layout>
            <div className="bg-white">
            <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
                <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                   {`You have entered a party size of ${party.size}...`}
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                {`${party.number_of_same_size_parties} times in total.`}
                </p>
                <svg
                    viewBox="0 0 1024 1024"
                    className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                    aria-hidden="true"
                >
                    <circle cx={512} cy={512} r={512} fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7" />
                    <defs>
                    <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                        <stop stopColor="#7775D6" />
                        <stop offset={1} stopColor="#E935C1" />
                    </radialGradient>
                    </defs>
                </svg>
                </div>
            </div>
            </div>
        </Layout>
    );
}