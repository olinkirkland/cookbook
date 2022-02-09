window.addEventListener('click', openModal);

function openModal(e){
    
    let target = e.target.parentNode.attributes.id;
    let targetString = "";

    console.log(target)

        targetString = target;

    targetString = targetString.replace('id="', '') //ERROR

    console.log(targetString)

    console.log(document.querySelector('#tv'))

}