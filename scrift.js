let imgBox = document.getElementById('imgBox');
let qrImage = document.getElementById('qrImage');
let QRtext = document.getElementById('QRtext');


function genrateQR(){
    if(QRtext.value.length > 0){
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + QRtext.value;

    imgBox.classList.add("show-img")
    }
    else{
        QRtext.classList.add("error")
        setTimeout(()=>{QRtext.classList.remove("error")},1000)
    }

}

