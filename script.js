const services = [
    {
        name: "Dry Cleaning",
        price: 200.00,
        image: "images (1).jpg"
    },
    {
        name: "Ironing",
        price: 150.00,
        image: "ironing.jpg"
    },
    {
        name: "Wash & Fold",
        price: 300.00,
        image: "wash and fold.jpg"
    },
    {
        name: "Stain Removal",
        price: 200.00,
        image: "stain removal.jpg"
    },
    {
        name: "Carpet Cleaning",
        price: 650.00,
        image: "carpet cleaning.jpg"
    },
     {
        name: "Leather Cleaning",
        price: 550.00,
        image: "leather cleaning.jpg"
    }
];

let index = 0;
let total = 0;
let cart = [];

const serviceImage = document.getElementById("serviceImage");
const serviceName = document.getElementById("serviceName");
const servicePrice = document.getElementById("servicePrice");

const addBtn = document.getElementById("addBtn");
const skipBtn = document.getElementById("skipBtn");

const cartItems = document.getElementById("cartItems");
const totalAmount = document.getElementById("totalAmount");
const emptyCartMesg = document.getElementById("emptyCartMesg");

const bookingform = document.getElementById("bookingForm")

// show service
function showService() {

    if(index >= services.length){
        serviceImage.src="";
        serviceImage.style.display="none";

        serviceName.innerHTML ="No more services!";
        servicePrice.innerHTML ="";

        addBtn.disabled = true;
        skipBtn.disabled = true;

        addBtn.style.opacity=".5";
        skipBtn.style.opacity="0.5";

        return;
    }

    serviceImage.style.display ="block";

    serviceImage.src = services[index].image;
    serviceName.innerHTML = services[index].name;
    servicePrice.innerHTML= `<i class="fa-solid fa-indian-rupee-sign"></i>` + services[index].price;
}

showService();


// add button
addBtn.addEventListener("click", function () {

    const item = services[index];

    cart.push(item);

    total += item.price;

    emptyCartMesg.style.display ="none";

    const row = document.createElement("tr");
    row.innerHTML=` <td>${cart.length}</td>
                    <td>${item.name}</td>
                    <td> ${item.price}</td>`;

    cartItems.appendChild(row);

    totalAmount.innerHTML=`<i class="fa-solid fa-indian-rupee-sign"></i>`+total;
    index++;

    showService();

});

// skip button
skipBtn.addEventListener("click",()=>{

    index++;
    showService();

});

// booking
const bookingMesg =document.getElementById("bookingMesg");
bookingform.addEventListener("submit",function (e){
    e.preventDefault();

    const name= document.getElementById("fullname").value.trim();
    const email= document.getElementById("email").value.trim();
    const phone= document.getElementById("phone").value.trim();

    if (cart.length===0){
        bookingMesg.innerHTML="Please add at least one service";
        bookingMesg.className="error";
        return;
    }
    if (name===""|| email==="" ||phone===""){
        bookingMesg.innerHTML="Please fill the details.";
        bookingMesg.className="error";
        return;
    }
    bookingMesg.innerHTML="✅Booking Succesful!!";
    bookingMesg.className="success";
    bookingform.reset();

    cart=[];
    cartItems.innerHTML="";
    emptyCartMesg.style.display="block";
    totalAmount.innerHTML="0.00";
    total=0;
    index=0;

    addBtn.disabled=false;
    skipBtn.disabled=false;
    addBtn.style.opacity="1";
    skipBtn.style.opacity="1";
    showService();

});