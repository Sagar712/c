let arr = []
window.navigator.mediaDevices.enumerateDevices()
.then(devices => {
    return devices
})
.then(devc => {
    let obj = ''
    devc.map(device => {
        console.log(device);
        obj += `Kind: ${device.kind}\nId: ${device.groupId}\n\n`
    })
    alert(obj)
});
