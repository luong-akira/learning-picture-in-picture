const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select meadia stream, pass to video elemnt, then play
async function selectMediaStream(){
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.onplay();
        }
    } catch (error) {
        // Catch Error Here
        console.log('whoops, error here: ',error);
    }
}

button.addEventListener('click',async () =>{
    button.disabled = true;
    await videoElement.requestPictureInPicture();
    button.disabled = false;
})

// On Load
selectMediaStream();