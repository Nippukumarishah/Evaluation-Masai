let myForm = document.querySelector('form');
let inpName = document.getElementById('name');
let inpDocID = document.getElementById('doctor_id');
let inpSpeacilist = document.getElementById('specialization');
let inpExp =document.getElementById('experience');
let inpEmail = document.getElementById('email');
let inpMob = document.getElementById('mobile');
let inpFilter = document.getElementById('filter');
let tbody = document.getElementById('tbody');

let Alldata = [];
myForm.addEventListener('submit', function(e){
    e.preventDefault();

    let Data = {};
    Data.pname = inpName.value;
    Data.pDocID = inpDocID.value;
    Data.pSpeacilist = inpSpeacilist.value;
    Data.pExp = inpExp.value;
    Data.pemail = inpEmail.value;
    Data.pmob = inpMob.value;
    Data.pfilter = inpFilter.value;
    tbody.innerHTML = null;


    Alldata.push(Data)
    tbody.innerHTML = "";

   

    Alldata.forEach((ele)=>{
        let row = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.innerText = ele.pname;
        let td2 =document.createElement('td');
        td2.innerText = ele.pDocID;
        let td3 = document.createElement('td');
        td3.innerText = ele.pSpeacilist;
        let td4 = document.createElement('td');
        td4.innerText = ele.pExp;

        let td5 = document.createElement('td');
        td5.innerText = ele.pemail;
        let td6 = document.createElement('td');
        td6.innerText = ele.pmob;
        let td7 = document.createElement('td');
        if(ele.pExp >5){
            td7.innerText ="Senior";
        }
        else if(ele.pExp >= 2 && ele.pExp <= 5){
            td7.innerText = "Junior";
        }
        else{
            td7.innerText = "Fresher";
        }
        let td8 =document.createElement('td');
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click',function(){
            let index = Alldata.indexOf(ele);
            if(index !== -1){
                Alldata.splice(index, 1);
            }
            row.remove();


        });
        td8.appendChild(deleteButton);
        row.append(td1,td2,td3,td4,td5,td6,td7,td8);
        tbody.appendChild(row);
    });
    myForm.reset();

});