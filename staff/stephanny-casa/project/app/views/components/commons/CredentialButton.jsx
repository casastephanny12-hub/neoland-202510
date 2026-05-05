export function CredentialButton({icon, children, onClick}){
    return <button
    onClick={onClick}
    className="flex items-center justify-between w-full border border-gray-300 rounded-md p-4 mb-3">
        <div className="flex items-center gap-3">
            <img src={icon} alt="" className="w-6 h-6"/>
            <p className="text-sm text-gray-700">{children}</p>
        </div>
        <img src="/credentials.svg" alt="go" className="w-4 h-4 text-gray-400" />
    </button>
}