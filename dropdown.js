const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const title = dropdown.querySelector('.dropdown-title');
    const list = dropdown.querySelector('.options-list');
    const listOptions = dropdown.querySelectorAll('.options-list li');
    const caret = dropdown.querySelector('.caret');
    const defaultValue = dropdown.querySelector('.default');

    title.addEventListener("click", () => {
        title.classList.toggle('dropdown-title-on');
        caret.classList.toggle('caret-rotate');
        list.classList.toggle('options-list-on');
    });

    listOptions.forEach(option => {
        option.addEventListener("click", () => {
            const previousValue = defaultValue.textContent;

            defaultValue.textContent = option.textContent;
            option.textContent = previousValue;

            title.classList.remove('dropdown-title-on');
            caret.classList.remove('caret-rotate');
            list.classList.remove('options-list-on');
        })
    });
    
})