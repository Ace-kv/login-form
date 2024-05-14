type FormInput = {
    name: string
    placeholder: string
    type: string
    className: string
    onChange?: () => void
}

export default function Input ({ name, placeholder, type, className, onChange }: FormInput) {
    return (
        <input 
            name={name} 
            placeholder={placeholder} 
            type={type}
            className={className} 
            required
        />
    )
}