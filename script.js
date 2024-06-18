// Variables to target elements via query selectors with attribute data-* or ID 'overlay'

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

// Loop through each button that opens a modal
openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

// Add an event listener to the overlay to close any active modals when clicked
overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

// Loop through each button that closes a modal
closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

// Function to open a modal
function openModal(modal) {
    if (modal == null) return // If null do nothing
    modal.classList.add('active')
    overlay.classList.add('active')
}

// Function to close a modal
function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}