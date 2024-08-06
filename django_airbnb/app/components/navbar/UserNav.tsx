'use client'

import { useState } from "react"

import MenuLink from "./MenuLink"

import useLoginModal from "@/app/hooks/useLoginModal"
import useSignupModal from "@/app/hooks/useSignupModal"

const UserNav = () => {
    const loginModal = useLoginModal();
    const signupModal = useSignupModal();
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="p-2 relative inline-block border rounded-full">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="flex item-centers"
            >
                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>

            </button>

            {isOpen && (
                <div className="w-[200px] absolute top-[60px] right-0 bg-white border rounded-xl shadow-md flex-col cursor-pointer">
                    <MenuLink 
                        label='Sign in'
                        onClick={() => {
                            setIsOpen(false);
                            loginModal.open();
                        }}
                    />

                    <MenuLink 
                        label='Sign up'
                        onClick={() => {
                            setIsOpen(false);
                            signupModal.open();
                        }}
                    />
                </div>
            )}
        </div>
    )
}

export default UserNav;