function AddPetButton ({children, className, type}) {
    return <button className={`"bg-orange-300 rounded-sm border-2 border-black p-1 my-6" ${className}`} type={type}>{children}</button>
}