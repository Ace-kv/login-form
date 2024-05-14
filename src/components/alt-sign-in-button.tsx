import Link from "next/link";

export default function Button({ value, url, px }: {value: string, url: string, px: string}) {
    return (
        <div className="w-1/2">
            <Link
                href={url}
                aria-label={`${value}-link`}
            >
                <button 
                    type="button"
                    className={`py-3 ${px} mt-6 mx-0 sm:mt-2 rounded-md bg-white text-black transition ease-in-out duration-300 hover:bg-black hover:text-white`}
                >
                    {value}
                </button>
            </Link>
        </div>

    )
}