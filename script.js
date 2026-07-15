const students = [
    {
        name:"Heena",
        marks:"90%",
        class:"10th"
    },
    {
        name:"Anchal",
        marks:"89%",
        class:"12th"
    },
    {
        name:"Riya",
        marks:"88%",
        class:"8th"
    },
    {
        name:"Neha",
        marks:"90%",
        class:"12th"
    },
    {
        name:"Rohan",
        marks:"79%",
        class:"9th"
    },
    {
        name:"Aman",
        marks:"96%",
        class:"10th"
    },
    {
        name:"Pooja",
        marks:"69%",
        class:"12th"
    },

    {
        name:"Rohit",
        marks:"85%",
        class:"8th"
    },
    {
        name:"Kajal",
        marks:"78%",
        class:"11th"
    },
    {
        name:"Diya",
        marks:"69%",
        class:"6th"
    },

    {
        name:"Nitin",
        marks:"85%",
        class:"7th"
    },
    {
        name:"Shreya",
        marks:"83%",
        class:"11th"
    },
    {
        name:"Sakshi",
        marks:"56%",
        class:"10th"
    },

    {
        name:"Monika",
        marks:"87%",
        class:"8th"
    },
    {
        name:"Harman",
        marks:"90%",
        class:"6th"
    }
];

const cards =document.getElementById("studentcards");
const search =document.getElementById("search");

function displayStudent(data){
    if(data.length ===0){
        cards.innerHTML=`<p style="grid-column":1/-1; text-align:center; color:#888;>No student found.</p>`;
        return;
    }
    cards.innerHTML=data.map(student=>
        `<div class="card">
            <p><strong>Student Name:</strong>${student.name}</p>
            <p><strong>Marks:</strong>${student.marks}</p>
            <p><strong>Class:</strong>${student.class}</p>
            </div>`
    ).join("");
}
displayStudent(students);

function filterStudents(){
    const searchTerm = search.value.toLowerCase();

    const filteredList = students.filter(student=> student.name.toLowerCase().includes(searchTerm));

    displayStudent(filteredList);
}
document.getElementById("search-btn").addEventListener("click",filterStudents);