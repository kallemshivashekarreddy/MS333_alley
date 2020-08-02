let startTime = performance.now();
let endTime;
VideoToFrames.getFrames('v1.mp4', 30, VideoToFramesMethod.totalFrames).then(function (frames: ImageData[]) {
  endTime = performance.now();
  frames.forEach((frame: ImageData) => {
    let canvas = document.createElement('canvas');
    canvas.width = frame.width;
    canvas.height = frame.height;
    canvas.getContext('2d').putImageData(frame, 0, 0);
    //var d=urlShortener(canvas.toDataURL("image/png"));
    //var image=new Image();
    //image.style.display="block";
    //console.log(canvas.toDataURL());
    // dataURI=canvas.toDataURL("image/png",0.5);
   // dataURL = dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    //canvas.baseURI();
   /* var blob=dataURItoBlob(dataURI)
    console.log("blob is ");
    console.log(blob);
    image.src=blob;
    */
   //var url=URL.createObjectURL(dataURI);
   //image.src=url;
    //console.log(canvas.toDataURL());
   // document.getElementsByTagName('body')[0].appendChild(canvas);
  });
  //console.log(endTime - startTime);
});