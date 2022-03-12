
console.log(window.navigator.mediaDevices.enumerateDevices()
.then(devices => {
    console.log(devices);
}));