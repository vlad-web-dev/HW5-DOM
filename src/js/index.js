window.addEventListener( 'load', function () {
    let data = {};
    function saveData() {
        const dataFromForm = new FormData(loginForm);
        dataFromForm.forEach((el, key) => {
            data[key] = el;
        })
        printAndSaveData()
    }

    function printAndSaveData() {
        const result = document.querySelector('.result')
        if (result) {
            result.textContent = JSON.stringify(data,undefined, 2)
        }
        localStorage.setItem('auth-data',JSON.stringify(data))
    }

    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        saveData();
    });
});