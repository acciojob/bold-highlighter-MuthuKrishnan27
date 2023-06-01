
        let strong = document.getElementsByTagName("strong");

         function highlight() {
            //Write your code here
                // console.log(strong);
            for(let i=0;i<strong.length;i++){
                strong[i].style.color = "green";
            }
         }
        function return_normal() {
        //Write your code here
            for(let i=0;i<strong.length;i++){
                strong[i].style.color="black";
            }
        }