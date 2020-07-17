function initiate() {
    var element = document.getElementById("canvas");
    var canvas = element.getContext("2d");
    var runBtn = document.getElementById("run")
    runBtn.addEventListener("click", run)

    var piPara = document.getElementById("pi")

    var inCircle;
    var outCircle;

    function run(){  
        inCircle=0; outCircle=0; 
        //Changing size of canvas     
        var canvasSize = document.getElementById("canvasSize").value
        var dartNumber = document.getElementById("dartNum").value
        element.height = canvasSize 
        element.width = canvasSize  

        //Square
        canvas.fillStyle = '#f2b93f'
        canvas.fillRect(0, 0, canvasSize, canvasSize)
        radius = canvasSize/2
        xStart = 0 +(canvasSize/2)
        yStart = 0 +(canvasSize/2)
        centerofCircle = Math.sqrt((Math.pow(xStart,2)) + (Math.pow(yStart,2)))
        edgeofCircle = Math.sqrt(Math.pow(yStart,2))
        radiusDistance = Math.sqrt(Math.pow(centerofCircle,2)- Math.pow(edgeofCircle,2))

        //Circle in square
        canvas.beginPath()
        canvas.arc(xStart, yStart, radius, 0, 2 * Math.PI);
        canvas.fillStyle = '#1c1442';
        canvas.fill();
        canvas.stroke();   

        function dart(num){
           
            for (x=0; x<num; x++){
                //check if darts in or outside of circle
                XCordinate = Math.floor(Math.random()*canvasSize)
                YCordinate = Math.floor(Math.random()*canvasSize)    
                distanceFrmCnter = Math.sqrt(Math.pow(XCordinate-xStart,2)+Math.pow(YCordinate-yStart,2))
               // count
               if (radiusDistance>distanceFrmCnter){
                   dartColor = 'white'
                   inCircle++;
               }
               else{
                   dartColor ='black'
                   outCircle++
             }

                //Draw darts            
                canvas.beginPath()
                canvas.arc(XCordinate, YCordinate, 2, 0, 2 * Math.PI);
                canvas.fillStyle =dartColor;
                canvas.fill();
                if(x==4){
                   
                }
            }
              
        }

        dart(dartNumber)

        pi = (4*inCircle)/ dartNumber
        piPara.innerHTML = "PI Estimate: "+pi
    }  
  }
  window.addEventListener("load", initiate);
  