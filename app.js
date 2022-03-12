let arr = []

let video = document.getElementById('video')
let Stream
let spinner = false
function ChangeCamera() {
    if (spinner)
        Camera('user')
    else
        Camera({ exact: "environment" })
    
    spinner = !spinner
}

function Camera(cam_object) {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: { facingMode: cam_object , width: { ideal: 1280 }, height: { ideal: 720 }} })
            .then(stream => {
                video.srcObject = stream
                video.play()
            })
            .catch(err => {
                alert("Requested Camera not found!");
            })
    }
}

ChangeCamera()

// window.navigator.mediaDevices.enumerateDevices()
//     .then(devc => {
//         let obj = ''
//         devc.map(device => {
//             console.log(device);
//             obj += `Kind: ${device.kind}\nId: ${device.groupId}\n\n`
//             if (device.kind == 'videoinput')
//                 arr.push(device.groupId)
//         })
//     })