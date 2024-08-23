//textarea donde el usuario escribe su mensaje.
let textUser = document.getElementById('box_text_user');
//teaxtarea donde el mensaje se encripta o desencripta
let message = document.getElementById('box_text_encrypter');

//oculta la imagen y muestra el textarea del texto encriptado o desencriptado
function elementsInViewport() {
    document.getElementById("box_encrypter_before").style.display = "none";
    document.getElementById("box_encrypter").style.display = "flex";
    return;
} 

function encrypter(wordsEncrypter) {
    const rulesEncrypter = ['enter', 'imes', 'ai', 'ober', 'ufat'];
    const vocals = ['e', 'i', 'a', 'o', 'u'];

    for(let i = 0; i<vocals.length; i++) {
        if(wordsEncrypter.includes(vocals[i])) {
        wordsEncrypter = wordsEncrypter.replaceAll(vocals[i], rulesEncrypter[i]);
        }
    }  
    return wordsEncrypter;
}

function desencrypter(wordsDesencrypter) {
    const rulesEncrypter = ['enter', 'imes', 'ai', 'ober', 'ufat'];
    const vocals = ['e', 'i', 'a', 'o', 'u'];

    for(let i = 0; i<vocals.length; i++) {
        if(wordsDesencrypter.includes(rulesEncrypter[i])) {
        wordsDesencrypter = wordsDesencrypter.replaceAll(rulesEncrypter[i], vocals[i]);
        }
    }  
    return wordsDesencrypter;
}

function buttonEncrypter() {
    const textEncrypter = encrypter(textUser.value);
    let msgErrorAccent = 'Recuerde que el texto no debe contener acentos.';
    
    //condicional para restringir que el texto contenga acentos y mayusculas.
    if (textEncrypter.search('á') !== -1) {
        alert(msgErrorAccent);
    } else if (textEncrypter.search('é') !== -1) {
        alert(msgErrorAccent);
    } else if (textEncrypter.search('í') !== -1) {
        alert(msgErrorAccent);
    } else if (textEncrypter.search('ó') !== -1) {
        alert(msgErrorAccent);
    } else if (textEncrypter.search('ú') !== -1) {
        alert(msgErrorAccent);
    } else if (textEncrypter.search('ü') !== -1) {
        alert(msgErrorAccent);
    } else {
        if (textEncrypter !== textEncrypter.toLowerCase()) {
            alert('Su texto contiene mayúsculas. Por favor corríjalo.');
        } else {            
            message.value = textEncrypter;
            textUser.value = ''
            elementsInViewport();
        }
    }
    return;
}

function buttonDesencrypter() {
    const textEncrypter = desencrypter(textUser.value);
    message.value = textEncrypter;
    textUser.value = ''
    elementsInViewport();
    return;
}

const copy = async () => {
    try {
        await navigator.clipboard.writeText(message.value);
    } catch (err) {
        console.error('Ocurrion un error al copiar:', err);
    }
}