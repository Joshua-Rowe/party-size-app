import React from "react";
import { Link } from "react-router-dom";
import { Disclosure, Menu, Transition } from '@headlessui/react'


export const Layout = ({ children }) => {
    return (
        <div className="min-h-full">
            <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
                <>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                        <img
                            className="h-8 w-8"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                            alt="Your Company"
                        />
                        </div>
                        <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link to="/" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" >
                                Home
                            </Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </>
            )}
            </Disclosure>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl">
                {children}
                </div>
            </div>

        </div>
    );

};

