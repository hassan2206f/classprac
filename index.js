let info = {}
let array=[]

function addbtn() {
    info ={
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        number : document.getElementById('number').value,
        age : document.getElementById('age').value,
    }


array.push(info);
console.log(array)

let javadata="";
for(let i=0;i<array.length;i++){
javadata += `<tr><td>${array[i].name}</td><td>${array[i].email}</td><td>${array[i].number}</td><td>${array[i].age}</td><td><button onclick="updatebtn(${i})" id="upbtn">Update</button></td><td><button onclick="deletebtn(${i})" id="delbtn">Delete</button></td></tr>` };

document.getElementById('data').innerHTML=javadata

let name = document.getElementById('name').value=""
let email = document.getElementById('email').value=""
let number = document.getElementById('number').value=""
let age = document.getElementById('age').value=""
};

function deletebtn(i){
    array.splice(i,1);
    document.getElementById('data').innerHTML=" ";
    addbtn()
    
}