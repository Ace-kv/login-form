'use client'

import { useState } from "react"
import { ShowPass, HidePass } from "./icons/icons"
import Input from "./form-input"
import SignInButton from "./form-sign-in-button"
import Link from "next/link"
import CheckBox from "./checkbox"

export default function Form () {
    const [showPass, setShowPass] = useState(false)
    const [showCheck, setShowCheck] = useState(true)

    function handlePassVis() {
        setShowPass(!showPass)
    }

    function handleCeckBoxTogg() {
        setShowCheck(!showCheck)
    }

    return (
        <div className="px-2">
            <form action={'#'} className="flex flex-col gap-4">
                <Input 
                    name="username" 
                    placeholder="Username" 
                    type="text" 
                    className="form-input"
                />
                <div className="relative">
                    <Input 
                        name="password" 
                        placeholder="Password" 
                        type={showPass ? 'text' : 'password'}
                        className="form-input w-full"
                    />
                    <span 
                        onClick={handlePassVis} 
                        className="absolute right-5 top-5">{showPass ? <ShowPass /> : <HidePass />}
                    </span>
                </div>
                <SignInButton type="submit" className="bg-[#d38d67] text-black rounded-3xl py-3.5 mb-5 cursor-pointer"/>
            </form>
            <div className="flex">     
                <div className="flex gap-3 items-center w-1/2 cursor-pointer">
                    <CheckBox checked={showCheck} label="Remember me" onToggle={handleCeckBoxTogg}/>
                </div>    
                <div className="w-1/2 text-right">
                    <Link href={'#'}>Forgot Password?</Link>
                </div>           
            </div>
        </div>
        
    )
}