export default function CheckBox ({ checked, label, onToggle }: {checked: boolean, label: string, onToggle: () => void}) {
    return (
        <>
            {/* <input defaultChecked={true} id="checkbox" className="checkbox accent-[#d38d67] text-white" type="checkbox" name="rememberMe-checkBox"/>
                <label htmlFor="checkbox" className="text-[#d38d67] font-semibold cursor-pointer">Remember Me</label> */}
            <input 
                defaultChecked={true} 
                id="checkbox" 
                className="sr-only" 
                type="checkbox" 
                name="rememberMe-checkBox"
            />
            <label 
                htmlFor="checkbox" 
                onClick={onToggle} 
                className="flex items-center cursor-pointer text-[#d38d67] font-semibold"
            >
                <div className={`w-4 h-4 border border-[#d38d67] ${checked ? 'bg-[#d38d67]' : 'bg-transparent'} rounded mr-2 flex items-center justify-center transition ease-in-out duration-100`}>
                    <svg className={`w-4 h-4 ${checked ? 'block' : 'hidden'}`} viewBox="0 0 24 24" fill="none" stroke="white">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                    </svg>
                </div>
                {label}
            </label>
        </>
    )
}