let arr = []
window.navigator.mediaDevices.enumerateDevices()
.then(devices => {
    return devices
})
.then(devc => {
    let obj = {}, i=1
    devc.map(device => {
        console.log(device.kind);
        obj[i++] = device.kind
    })
    alert(JSON.stringify(obj))
});
