export default function SignInButton ({ type, className }: {
    type: "button" | "submit" | "reset" | undefined,
    className: string
}) {
    return (
        <button 
            type={type} className={className}>
            SIGN IN
        </button>
    )
}