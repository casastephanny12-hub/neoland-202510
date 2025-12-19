const addPetView = createView()
hideView(addPetView)

const addPetTitle = createTitle()
setTextContent(addPetTitle, 'MyPet')
setClass(addPetTitle, 'font-bold italic text-4xl')
addChild(addPetView, addPetTitle)

const addPetTopPanel = createPanel()
setClass(addPetTopPanel, 'flex justify-between')
addChild(addPetView, addPetTopPanel)

const addPetSubtitle = createTitle2()
setTextContent(addPetSubtitle, 'Add Pet')
setClass(addPetSubtitle,'text-xl italic my-4')
addChild(addPetTopPanel, addPetSubtitle)

const addPetBackLink = createLink()
setTextContent(addPetBackLink, '< Back')
addChild(addPetTopPanel, addPetBackLink)

addPetBackLink.addEventListener('click', function (event) {
    event.preventDefault()

    hideView(addPetView)
    sshowView(homeView)
})

const addPetForm = createForm()
setClass(addPetForm, 'flex flex-col')

const addPetNameLabel = createLabel()
setTextContent(addPetNameLabel, 'Name')
setFor(addPetNameLabel, 'name')
addChild(addPetForm, addPetNameLabel)

const addPetNameInput = createInput()
setId(addPetNameInput, 'name')
setType(addPetNameInput, 'text')
setClass(addPetNameInput, 'border-2 boder-solid border-black rounded-lg p-1')
addChild(addPetForm, addPetNameInput)

const addPetBirthdateLabel = createLabel()
setTextContent(addPetBirthdateLabel,'Date of Birth')
setFor(addPetBirthdateLabel,'date')
addChild(addPetForm, addPetBirthdateLabel)

const addPetBirthdateInput = createInput()
setId(addPetBirthdateInput, 'date')
setType(addPetBirthdateInput,'date')
setClass(addPetBirthdateInput, 'border-2 boder-solid border-black rounded-lg p-1')
addChild(addPetForm, addPetBirthdateInput)

const addPetWeightLabel = createLabel()
setTextContent(addPetWeightLabel, 'Weight (kg)')
setFor(addPetWeightLabel, 'weight')
addChild(addPetForm, addPetWeightLabel)

const addPetWeightInput = createInput()
setId(addPetWeightInput, 'weight')
setType(addPetWeightInput, 'number')
setStep(addPetWeightInput, '0.01')
setClass(addPetWeightInput, 'border-2 boder-solid border-black rounded-lg p-1')
addChild(addPetForm, addPetWeightInput)

const addPetImageLabel = createLabel()
setTextContent(addPetImageLabel,'Image')
setFor(addPetImageLabel,'image')
addChild(addPetForm, addPetImageLabel)

const addPetImageInput = createInput()
setId(addPetImageInput, 'image')
setType(addPetImageInput, 'url')
setClass(addPetImageInput, 'border-2 boder-solid border-black rounded-lg p-1')
addChild(addPetForm, addPetImageInput)

const addPetSubmitButton = createButton()
setTextContent(addPetSubmitButton, 'Add Pet')
setType(addPetSubmitButton,'submit')
setClass(addPetSubmitButton, 'bg-orange-300 rounded-sm border-2 border-black p-1 my-6 self-center')
addChild(addPetForm,addPetSubmitButton)

addChild(addPetView, addPetForm)

addPetForm.addEventListener('submit', function (event) {
    event.preventDefault()

    const name = getValue(addPetNameInput)
    const birthdate = getValue(addPetBirthdateInput)
    const weight = parseFloat (getValue(addPetWeightInput))
    const image = getValue(addPetImageInput)

    try {
        logic.addPet(name, birthdate, weight, image)

        reset(addPetForm)
        setTextContent(addPetFeedback, '')
        
        clearHomePetList()

        renderHomePetList()

        hideView(addPetView)
        showView(homeView)

    } catch (error) {
        setTextContent(addPetFeedback, error.message)
    }

})

const addPetFeedback = createParagraph()
addChild(addPetView, addPetFeedback)

addChild(document.body, addPetView)