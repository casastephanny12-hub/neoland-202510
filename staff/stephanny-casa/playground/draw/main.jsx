const rootElement = document.getElementById('root') //referencia del objeto index
const root = ReactDOM.createRoot(rootElement) //pasamos a DOM

function WazowskiEye() {
    return <div class="w-30 h-30 bg-white absolute left-15 top-10 rounded-full">
        <div class="w-10 h-10 bg-[darkblue] absolute left-10 top-10 rounded-full"></div>
    </div>
}

function WazowskiMouth() {
    return <div class="w-30 h-5 bg-black absolute left-15 bottom-10"></div>
}

function WazowskiHead() {
    return <div class="w-60 h-60 bg-[yellowgreen] absolute rounded-full p-10">
        <WazowskiEye />
        <WazowskiMouth />
    </div>
}

function PigEyeLeft() {
    return <div class="w-40 h-40 bg-white absolute left-5 top-5">
        <div class="w-20 h-20 bg-black absolute left-10 top-10"></div>
    </div>
}

function PigEyeRight() {
    return <div class="w-40 h-40 bg-white absolute right-5 top-5">
        <div class="w-20 h-20 bg-black absolute left-10 top-10"></div>
    </div>
}

function PigNose() {
    return <div class="w-50 h-30 bg-[palevioletred] absolute left-25 top-50">
        <div class="w-10 h-10 bg-black absolute left-10 top-10"></div>
        <div class="w-10 h-10 bg-black absolute right-10 top-10"></div>
    </div>
}

function PigMouth() {
    return <div class="w-30 h-10 bg-black absolute left-35 bottom-5"></div>
}

function PigEarLeft() {
    return <div class="w-10 h-40 bg-pink-300 absolute -left-10"></div>
}

function PigEarRight() {
    return <div class="w-10 h-40 bg-pink-300 absolute -right-10"></div>
}

function PigHead() {
    return <div class="w-100 h-100 bg-pink-300 absolute left-100 top-100">
        <PigEyeLeft />
        <PigEyeRight />

        <PigNose />

        <PigMouth />

        <PigEarLeft />
        <PigEarRight />
    </div>
}

root.render([<WazowskiHead />, <PigHead />])

