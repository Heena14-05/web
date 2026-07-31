const services = [

{
icon:"👕",
name:"Dry Cleaning",
price:100.00
},

{
icon:"👕",
name:"Wash & Fold",
price:200.00
},

{
icon:"👕",
name:"Ironing",
price:30.00
},

{
icon:"👕",
name:"Stain Removal",
price:550.00
},

{
icon:"👕",
name:"Leather & Suede Cleaning",
price:800.00
},

{
icon:"🥻",
name:"Wedding Dress Cleaning",
price:2000.00
}

];

const serviceList = document.getElementById("serviceList");
const cartBody = document.getElementById("cartBody");
const total = document.getElementById("total");
const btnBook = document.getElementById("btnBook")
const btnSubscribe = document.getElementById("btnSubscribe")


let cart =[];


function displayService (){
    serviceList.innerHTML="";
    services.forEach((service,index)=>{
        const isAdded = cart.includes(service);
        serviceList.innerHTML+=`
        <div class="service">

            <div class="service-des">    
                <h4><span>${service.icon}</span>${service.name}</h4>
                <span>₹${service.price}</span>
            </div>

            <div class="btn-grp">
                ${
                    isAdded
                    ? `<button class="remove-btn" onclick="removeItem(${index})">
                        Remove Item
                       </button>`
                    : `<button class="add-btn" onclick="addItem(${index})">
                        Add Item
                       </button>`
                }
            </div>

        </div>`

    })
}

function addItem(index){
     if (!cart.includes(services[index])) {
        cart.push(services[index]);
        emptyCartMesg.style.display ="none"; 
    }

    displayService(); 
    updateCart();
}

function removeItem(index){
    cart = cart.filter(item => item !== services[index]);

    displayService();
    updateCart();
}

function updateCart() {

    cartBody.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price;

        cartBody.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td>₹${item.price}</td>
        </tr>
        `;
    });

    document.getElementById("total").innerText = "₹" + total;
}
displayService();



document.getElementById("book-now").onclick=function(){
    document.getElementById("booking")
    .scrollIntoView({
        behavior:"smooth"
    })
}




btnBook.addEventListener("click",function (e){
    e.preventDefault();

    const name= document.getElementById("fullname").value.trim();
    const email= document.getElementById("email").value.trim();
    const phone= document.getElementById("phone").value.trim();
    const bookingMesg =document.getElementById("bookingMesg");

    if (cart.length===0){
        bookingMesg.innerHTML="Please add at least one service";
        bookingMesg.style.color="red";
        return;
    }
    if (name===""|| email==="" ||phone===""){
        bookingMesg.innerHTML="Please fill the details.";
        bookingMesg.style.color="red";
        return;
    }

    const totalAmount = document.getElementById("total").innerText;

    const serviceNames = cart
        .map(item=> item.name)
        .join(", ");
    emailjs.send("service_05osofh","template_h8oye7q",{
        customer_name:name,
        customer_email:email,
        customer_phone:phone,
        services:serviceNames,
        total:totalAmount

    }).then(function(){
        bookingMesg.innerHTML="✅Booking Succesful!! <br> We get back to you";
        bookingMesg.style.color="green";


        cart=[];
        index=0;
        cartBody.innerHTML="";
        emptyCartMesg.style.display="block";
        updateCart();
        
        document.getElementById("fullname").value="";
        document.getElementById("email").value="";
        document.getElementById("phone").value="";
    }).catch(function(){
        bookingMesg.style.color="red";
        bookingMesg.innerHTML="Booking Failed!!Try Again."
    });
    


});


btnSubscribe.addEventListener("click",function(){
    const n=document.getElementById("subName").value.trim();
    const e=document.getElementById("subEmail").value.trim();
    const mesg=document.getElementById("subscribeMesg");

    if(n===""|| e===""){
        mesg.style.color="yellow";
        mesg.innerHTML="Please fill details!";
        return
    }

    mesg.style.color="white";
    mesg.innerHTML="Subscribed Successfully!!✅";

});