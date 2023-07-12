let connexionForm = document.getElementById('connexionForm')
let validatePasswordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/ // Regex for strong password


connexionForm.addEventListener('submit', function(e){ // validate form for modal connexion
    let emailConnexionForm = document.getElementById('emailConnexionForm')
    let passwordConnexionForm = document.getElementById('passwordConnexionForm')

    e.preventDefault()

    if (emailConnexionForm.value.trim() === ""){
        let errorEmailConnexionForm = document.getElementById('errorEmailConnexionForm')
        errorEmailConnexionForm.innerHTML = "Un identifiant valide est requis"
        errorEmailConnexionForm.style.color = "#DA6464"
    } 

    if (passwordConnexionForm.value.trim() === ""){
        let errorPasswordConnexionForm = document.getElementById('errorPasswordConnexionForm')
        errorPasswordConnexionForm.innerHTML = "Un mot de passe est requis"
        errorPasswordConnexionForm.style.color = "#DA6464"
    } else if (validatePasswordRegex.test(passwordConnexionForm.value) === false){
        let errorPasswordConnexionForm = document.getElementById('errorPasswordConnexionForm')
        errorPasswordConnexionForm.innerHTML = "Mot de passe invalide"
        errorPasswordConnexionForm.style.color = "#DA6464"
    }
})