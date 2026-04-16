export function Form({children, onSubmit}){
    return <form className="flex flex-col gap-2 mt-6" onSubmit={onSubmit}>{children}
    </form>
}