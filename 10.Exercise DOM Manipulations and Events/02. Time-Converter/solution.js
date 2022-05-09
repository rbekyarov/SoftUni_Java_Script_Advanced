function attachEventsListeners() {

    let buttons = Array.from(document.querySelectorAll('input[type=button]'))
    buttons.forEach(element => {
        element.addEventListener('click', onClick)
    })
    function onClick(ev) {
        let valueSeconds = 0
        let valueInput = Number(ev.target.previousElementSibling.value)
        let idElement = ev.target.previousElementSibling.id
        let inputFields = Array.from(document.querySelectorAll('div input[type="text"]'))

        if (idElement === 'days') {
            valueSeconds = 86400 * valueInput
            inputFields.forEach(element => {
                if (element.id === 'hours') {
                    element.value = valueSeconds / 3600
                } else if (element.id === 'minutes') {
                    element.value = valueSeconds / 60
                } else if (element.id === 'seconds') {
                    element.value = valueSeconds
                }
            })
        } else if (idElement === 'hours') {
            valueSeconds = 3600 * valueInput
            inputFields.forEach(element => {
                if (element.id === 'days') {
                    element.value = valueSeconds / 86400
                } else if (element.id === 'minutes') {
                    element.value = valueSeconds / 60
                } else if (element.id === 'seconds') {
                    element.value = valueSeconds
                }
            })

        } else if (idElement === 'minutes') {
            valueSeconds = 60 * valueInput
            inputFields.forEach(element => {
                if (element.id === 'hours') {

                    element.value = valueSeconds / 3600
                } else if (element.id === 'days') {
                    element.value = valueSeconds / 86400
                } else if (element.id === 'seconds') {
                    element.value = valueSeconds
                }
            })


        } else if (idElement === 'seconds') {
            valueSeconds = valueInput
            inputFields.forEach(element => {
                if (element.id === 'hours') {
                    element.value = valueSeconds / 3600
                } else if (element.id === 'minutes') {
                    element.value = valueSeconds / 60
                } else if (element.id === 'days') {
                    element.value = valueSeconds / 86400
                }
            })

        }

    }

}
