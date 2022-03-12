let arr = []
window.navigator.mediaDevices.enumerateDevices()
.then(devc => {
    let obj = ''
    devc.map(device => {
        console.log(device);
        obj += `Kind: ${device.kind}\nId: ${device.groupId}\n\n`
        if(device.kind == 'videoinput')
            arr.push(device.groupId)
    })
})

let video = document.getElementById('video')
let Stream

if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
    navigator.mediaDevices.getUserMedia({video:true})
    .then(stream => {
        video.srcObject = stream
        video.play()
    })
}

function ChangeCamera() {
    navigator.mediaDevices.getUserMedia({video:{facingMode:{ exact: "environment" }}})
    .then(stream => {
        video.srcObject = stream
        video.play()
    })
    .catch(err => {
        alert("No rear camera found\n");
    })
}