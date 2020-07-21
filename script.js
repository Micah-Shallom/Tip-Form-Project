const billAmnt = document.getElementById('billAmnt');
const tipPercent = document.getElementById('tipPercent');
const noOfPeople = document.getElementById('noOfPeople');
const calculate = document.getElementById('calculate');
const totalBill = document.querySelectorAll('.totalBill');
const tipAmount = document.getElementById('tipAmount');
const userBill = document.getElementById('userBill');
const modalBtn = document.getElementById('clearBtn');
const errorModal = document.querySelector('.error-modal');
const tipPercentage = document.getElementById('tipPercentage');
const loader = document.querySelector('.loader');
const modalContainer = document.querySelector('.modal-container');

const showError=(errMsg)=>{
  errorModal.style.display='block';
  errorModal.textContent=errMsg;
  setTimeout(()=>errorModal.style.display='none',2000);
}
const updateModal=()=>{
  if(billAmnt.value==''||noOfPeople.value==''||tipPercent.value==''){
    showError('All Fields Must Be Filled');
  }else if((/\D/gi).test(billAmnt.value)&&(/\D/gi).test(billAmnt.value)){
    showError('Enter Valid Bill Value and Tip Percentage');
  }else{
    tipAmount.innerText=Math.ceil(+(tipPercent.value/100)*billAmnt.value);
    totalBill.forEach(x=>{
      x.textContent=(+billAmnt.value+Number(tipAmount.innerText))
    });
    userBill.innerText=((+billAmnt.value+Number(tipAmount.innerText))/noOfPeople.value).toFixed(2);
    tipPercentage.innerText=tipPercent.value;
    showModal();
  }

}
const showModal=()=>{
  loader.style.display='flex';
  setTimeout(()=>{
    loader.style.display='none';
    modalContainer.style.display='flex';
  },4000);
  setTimeout(()=>{modalContainer.style.display='none';},10000)
}
  
calculate.addEventListener('click',()=>{
  updateModal();
});
modalBtn.addEventListener('click',()=>{
 modalContainer.style.display='none';
 document.querySelectorAll('input').forEach(x=>{
   x.value='';
 })
})