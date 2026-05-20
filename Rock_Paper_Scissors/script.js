const gameContainer = document.querySelector(".container")
userResult = document.querySelector(".user_result img")
cpuResult = document.querySelector(".cpu_result img")
result= document.querySelector(".result")
optionImages = document.querySelectorAll(".option_image")

console.log(gameContainer,userResult,cpuResult,result,optionImages)

optionImages.forEach((image,index)=>{
    image.addEventListener("click",(e)=>{
        image.classList.add("active")

        //loop through each option image again
        optionImages.forEach((image2,index2)=>{
            //if the current index doesn't match the clicked index
            //remove the "active" class from the other option images
            index !== index2 && image2.classList.remove("active");
            console.log(index,index2)
            
        })
        let imageSrc=e.target.querySelector("img").src
        userResult.src=imageSrc
        console.log(e.target)


        //Generate a random number between 0 and 2
        let randomNumber = Math.floor(Math.random()*3);
        //create a arrayofCPU image options
        let cpuImages=["images/rock.png","images/paper.png","images/scissors.png"]
        cpuResult.src=cpuImages[randomNumber];

        let cpuValue=["R","P","S"][randomNumber]
        let userValue=["R","P","S"][index]

        let outComes={
            RR:"Draw",
            RP:"CPU",
            RS:"User",
            PP:"Draw",
            PR:"CPU",
            PS:"User",
            SS:"Draw",
            SR:"CPU",
            SP:"User"

        }

        let outComeValue=outComes[userValue+cpuValue];

        console.log(outComeValue)
        result.textContent = userValue === cpuValue? "Match Draw":`${outComeValue} Won!!`;
        

        
    })
})
