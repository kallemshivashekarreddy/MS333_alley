var startTime = performance.now();
var endTime;
console.log("start: "+startTime);
VideoToFrames.getFrames('v1.mp4', 10, VideoToFramesMethod.totalFrames).then(function (frames) {
    endTime = performance.now();
    frames.forEach(function (frame) {
        var canvas = document.createElement('canvas');
        canvas.width = frame.width;
        canvas.height = frame.height;
        canvas.getContext('2d').putImageData(frame, 0, 0);
        var image=new Image();
        //image.style.display="block";
        //console.log(canvas.toDataURL());
        
        var dataURI=canvas.toDataURL("image/png",0.5);
    
      //  dataURI=urlShortener(dataURI);
        image.src=dataURI;
       // dataURL = dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
        //canvas.baseURI();
      /*  var blob=dataURItoBlob(dataURI)
        console.log("blob is ");
        console.log(blob);
        
        
       var url=URL.createObjectURL(blob);
       image.src=canvas.baseURI;
      // image.src=url;
      */
       // textDetect(""+image.src);
        document.getElementsByTagName('body')[0].appendChild(image);
        //document.getElementsByTagName('body')[0].appendChild(canvas);
    });
    endTime=performance.now();
    console.log("end: "+endTime);
    console.log(endTime - startTime);
});
//# sourceMappingURL=test.js.map
//sk_bf1181c3d9a8437b02f16672
function dataURItoBlob(dataURI) {
    // convert base64 to raw binary data held in a string
    // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
    var byteString = atob(dataURI.split(',')[1]);
  
    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
  
    // write the bytes of the string to an ArrayBuffer
    var ab = new ArrayBuffer(byteString.length);
  
    // create a view into the buffer
    var ia = new Uint8Array(ab);
  
    // set the bytes of the buffer to the correct values
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
  
    // write the ArrayBuffer to a blob, and you're done
    var blob = new Blob([ab], {type: mimeString});
    return blob;
  
  }
  
function textDetect(source){
    console.log("in textDetect");
    var secret_key = "sk_bf1181c3d9a8437b02f16672";
    var url = "https://api.openalpr.com/v3/recognize_bytes?recognize_vehicle=1&country=us&secret_key=" + secret_key;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    // Send POST data and display response
    xhr.send(source+"");  // Replace with base64 string of an actual image
    console.log(source);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            document.getElementById("response").innerHTML = xhr.responseText;
        } else {
            document.getElementById("response").innerHTML = "Waiting on response...";
        }
    }
    
    //console.log(xhr);

}
/*
function urlShortener(source){
var settings = {
	"async": true,
	"crossDomain": true,
	"url": source,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "url-link-shortener.p.rapidapi.com",
		"x-rapidapi-key": "f2feb06e99msh1c1e81ffdc4ad50p18dd1djsnc8f9b5e8da46"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});
return response;
}
*/