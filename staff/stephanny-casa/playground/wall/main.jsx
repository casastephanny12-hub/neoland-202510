const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

const useState = React.useState

function App() {

    const messagesState = useState(['Hello, world! (Peter, 2025-12-19)'])
    const messages = messagesState[0]
    const setMessages = messagesState[1]

    const handleMessageSubmit = event => {
        event.preventDefault()

        console.log('message sent')
    }

    return <div className= 'flex flex-col gap-2 p-2'>
        <h1 className="text-3xl">Wall</h1>

        <ul  className="p-2">
            <li>
                <p>{messages[0]}</p>
            </li>
        </ul>

       <form className="flex flex-col border p-2" onSubmit={handleMessageSubmit}>
        <h2>Leave your message on the Wall</h2>

        <label htmlFor="message">Message</label>
        <input className="border" type="text" id="message"></input>

        <label htmlFor="name">Name</label>
        <input className="border" type="text" id="name"></input>

        <button className="border" type="submit">Send</button>
       </form>
    </div>
}