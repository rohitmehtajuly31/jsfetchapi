const url='https://cat-fact.herokuapp.com/facts'
const button = document.getElementById('myButton');
const paragraph = document.getElementById('myParagraph');
const h3 = document.getElementById('h3');

async function getfacts(){
    let response=await fetch(url)
    let data=await response.json()
    console.log(data)

    button.addEventListener('click',function(){
        const randomindex=Math.floor(Math.random() * data.length);
        paragraph.innerText=''
        h3.innerText=''
        data.forEach((data,index)=>{
            if(index==randomindex){
                paragraph.innerText+=`${index}.${data.text}`
                h3.innerText=data.user
            }

        });
        
            
        
    })

}


function thefacts() {

    const mypro = new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => {
                resolve(response);
                return response.json(); // Invoking json() method
            })
            .then((data) => {
                console.log("Sdf", data[0].text);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

thefacts();



getfacts()



