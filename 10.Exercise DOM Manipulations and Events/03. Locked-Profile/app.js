function lockedProfile() {
    Array.from (document.querySelectorAll('.profile button'))
    .forEach(button => button.addEventListener('click',onClick));

    function onClick (ev){
        let profile = ev.target.parentElement;
        let isActive = profile.querySelector('input[value ="unlock"]').checked;
        console.log(isActive);
        if (isActive){
            let info = Array.from(profile.querySelectorAll('div'))
                .find(p => p.id.includes('HiddenFields'));
            console.log(info)
            if (ev.target.textContent === 'Show more' ){
                ev.target.textContent = 'Hide it';
                info.style.display = 'block';
            }else {
                info.style.display = 'none';
                ev.target.textContent = 'Show more'
            }
        }
    }
}