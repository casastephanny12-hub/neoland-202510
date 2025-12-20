const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

const useState = React.useState

function App() {

    const displayState = useState('0')
    const displayValue = displayState[0]
    const setDisplayValue = displayState[1]

    //function oneClicked(){
    //  console.log('one clicked')
    //}

    const handleOneClicked = () => {

        if (displayValue === '0')
            setDisplayValue('1')

        else
            setDisplayValue(displayValue + '1')
    }

       const handleTwoClicked = () => {

        if (displayValue === '0')
            setDisplayValue('2')

        else
            setDisplayValue(displayValue + '2')
    }
    
      const handleThreeClicked = () => {

        if (displayValue === '0')
            setDisplayValue('3')

        else
            setDisplayValue(displayValue + '3')
    }

    console.log('App -> render')

    return <div className="border-2 m-2 p-2 rounded-2xl bg-gray-800 text-white">
        <div className="flex justify-end px-4 text-3xl">{displayValue}</div>

        <div className="p-2 flex flex-col gap-2">
            <div className="flex justify-between">
                <div className="bg-gray-400 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer">⌫</div>
                <div className="bg-gray-400 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer">AC</div>
                <div className="bg-gray-400 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer">%</div>
                <div className="bg-orange-400 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer">÷</div>
            </div>
            <div className="flex justify-between">
                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer">7</div>
                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer">8</div>
                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer">9</div>
                <div className="bg-orange-400 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer">×</div>
            </div>
            <div className="flex justify-between">
                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer">4</div>
                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer">5</div>
                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer">6</div>
                <div className="bg-orange-400 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer">-</div>
            </div>
            <div className="flex justify-between">
                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer" onClick={handleOneClicked}>1</div>
                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer" onClick={handleTwoClicked}>2</div>
                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer" onClick={handleThreeClicked}>3</div>
                <div className="bg-orange-400 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer">+</div>
            </div>
            <div className="flex justify-between">
                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer">+⁄-</div>
                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer">0</div>
                <div className="bg-gray-600 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer">,</div>
                <div className="bg-orange-400 p-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer">=</div>
            </div>


        </div>
    </div>
}