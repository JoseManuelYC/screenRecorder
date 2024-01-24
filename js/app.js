const $button = document.getElementById('btn-record');
const containerRecord = document.getElementById('ctn-record');
const $buttonStop = document.getElementById('btn-stop');
const containerStop = document.getElementById('ctn-stop');

    $button.addEventListener('click', async () => {
      const media = await navigator.mediaDevices.getDisplayMedia({
        video: { frameRate: { ideal: 30 } }
      })
      const mediarecorder = new MediaRecorder(media, {
        mimeType: 'video/webm;codecs=vp8,opus'
      })
      mediarecorder.start();
    
      const [video] = media.getVideoTracks()
      video.addEventListener("ended", () => {
        mediarecorder.stop()
      })
    
      mediarecorder.addEventListener("dataavailable", (e) => {
        const link = document.createElement("a")
        link.href = URL.createObjectURL(e.data)
        link.download = "captura.webm"
        link.click()
      })
      containerRecord.style.display = "none";
      containerStop.style.display = "flex";
      if(containerStop.style.display = "flex"){
        $buttonStop.addEventListener('click', async () => {
              mediarecorder.stop();
              const [video] = media.getVideoTracks()
              video.addEventListener("ended", () => {
                mediarecorder.stop()
              })
              containerRecord.style.display = "flex";
              containerStop.style.display = "none";
        })
      }
    });