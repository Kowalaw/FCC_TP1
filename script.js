let name = document.getElementById('name')
let mail = document.getElementById('email')
let age = document.getElementById('number')
let enfantOuiNon = 'non'
let enfant = '0'
let varAnimaux = 'non'
let message = document.querySelector('textarea')
let i=0
let i2=0
let i3=0

radioEnfant()
radioNombre()
animaux()
envoyer()

function envoyer(){
    let envoyer = document.getElementById('submit')
    envoyer.addEventListener('click',(event)=>{
        event.preventDefault()
        console.log(
            'nom : ' +name.value,
            '\nmail : ' +mail.value,
            '\nage : ' +age.value,
            '\nenfant : '+enfantOuiNon,
            "\nenfant : " +enfant,
            "\nanimaux : "+ varAnimaux,
            "\nmessage : "+message.value )
    })
}
function radioEnfant(){
    let radioEnfant = document.getElementsByClassName('rad')
    for(i;i<radioEnfant.length;i++){
        radioEnfant[i].addEventListener("change", (event)=>{
            if(event.target.value==='opt1'){
                enfantOuiNon = "oui"
            } else {
                enfantOuiNon = "non"
            }
        })
    }
}
function radioNombre(){
    let radioNombre = document.getElementsByClassName('rad2')
    for(i2;i2<radioNombre.length;i2++){
        radioNombre[i2].addEventListener("change",(e)=>{
            switch(e.target.value){
                case "1":
                    enfant = "1 enfant"
                    break
                case '2':
                    enfant = '2 enfants'
                    break
                case '2+':
                    enfant = '2 ou plus'
                    break
                default:
                    enfant = '0'
                    break
            }
        })
    }
}
function animaux(){
    let animauxOuiNon = document.querySelector('select')
    animauxOuiNon.addEventListener('change',(event)=>{
        if(event.target.value==='oui'){
            varAnimaux = "oui"
        } else {
            varAnimaux = "non"
        }
    })
}