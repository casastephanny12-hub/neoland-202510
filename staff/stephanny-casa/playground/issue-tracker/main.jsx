const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(< App />)

const useState = React.useState

function App() {

    /*
     const issuesState = useState([])
     const issues = issuesState[0]
     const setIssues = issuesState[1]
 
     */

    const [issues, setIssues] = useState([])

    const handleIssueSubmit = event => {
        event.preventDefault()

        const form = event.target

        const subject = form.subject.value
        const body = form.body.value

        try {
            logic.createIssue(subject, body)

            form.reset()

            const issues = logic.getAllIssues()

            const newIssues = []

            for (const issue of issues)
                newIssues.push(issue)

            setIssues(newIssues)

        } catch (error) {
            console.error(error)
        }
    }

    const handleCloseClick = event => {
        event.preventDefault()

        const button = event.target
        const issueId = button.id

        try {
            logic.closeIssue(issueId)

            const issues = logic.getAllIssues()

            const newIssues = []

            for (const issue of issues)
                newIssues.push(issue)

            setIssues(newIssues)
        } catch(error){
            console.error(error)
        }
    }

    const listItems = []

    for (const issue of issues)
        listItems.push(<li className="border border-sky-500 p-2 flex flex-col items-start">
            <h3 className="text-md font-bold">{issue.subject} {issue.status}</h3>
            <p className="text-sm">{issue.body}</p>
            <time className="text-xs">{issue.date}</time>
            {issue.status === '🟢' && <button id={issue.id} className="flex self-end" onClick={handleCloseClick}>✅</button>}
        </li>)

    return <div className="p-2 bg-gray-200 min-h-screen">
        <h1 className="font-bold text-2xl flex justify-center text-sky-500">Issue Tracker 📎</h1>

        <div className="mt-2">
            <h2 className="text-sky-500">
                Create Issue 👇
            </h2>

            <form onSubmit={handleIssueSubmit}>
                <div className="flex flex-col mt-2">
                    <label className="text-sm text-sky-500" htmlFor="subject">Subject</label>
                    <input className="border border-sky-500 rounded-lg bg-gray-200" id="subject"></input>
                </div>

                <div className="flex flex-col mt-2">
                    <label className="text-sm text-sky-500" htmlFor="body">Body</label>
                    <input className="border border-sky-500  rounded-lg bg-gray-200" id="body"></input>
                </div>

                <div className="flex justify-end mt-2">
                    <button className="border rounded-md p-1 bg-sky-500 text-white" type="submit">Create</button>
                </div>

            </form>
        </div>

        <div>
            <h2 className="text-sky-500 flex justify-center font-bold text-lg">Issue List</h2>
            <ul className="flex flex-col gap-2">{listItems}</ul>
        </div>
    </div>
}
