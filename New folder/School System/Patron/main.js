const firebaseConfig = {
    apiKey: "AIzaSyAz4l0NelkNIt22lnktqeAacYt_lmpgQAE",
    authDomain: "forever-system.firebaseapp.com",
    databaseURL: "https://forever-system-default-rtdb.firebaseio.com/",
    projectId: "forever-system",
    storageBucket: "forever-system.appspot.com",
    messagingSenderId: "445987315824",
    appId: "1:445987315824:web:086da28fcd243b110494b5"
};



firebase.initializeApp(firebaseConfig)

var db = firebase.database()  

function Send(){
    var fname = document.getElementById("fname").value 
    var lname = document.getElementById("lname").value 
    var province = document.getElementById("province").value 
    var district = document.getElementById("district").value 
    var sector = document.getElementById("sector").value 
    var village = document.getElementById("village").value 
    var gender = document.getElementById("gender").value 
    var level = document.getElementById("level").value 
    var phone = document.getElementById("phone").value 
    var trade = document.getElementById("trade").value 
    var year = document.getElementById("year").value 
    db.ref("Students").push().set({
        "firstName" : fname,
        "lastName" : lname,
        "province" : province,
        "district" : district,
        "sector" : sector,
        "village" : village,
        "phone" : phone,
        "gender" : gender,
        "level" : level,
        "phone" : phone,
        "trade" : trade,
        "year" : year,
    });

    return false
};
    

db.ref("Students").on("child_added", function(snapshot) {

    var tbl = ""
    tbl += "<tr>"
    tbl += "<td>"
    tbl += snapshot.val().firstName
    tbl += "</td>"
    tbl += "<td>"
    tbl += snapshot.val().lastName
    tbl += "</td>"
    tbl += "<td>"
    tbl += snapshot.val().province
    tbl += "</td>"
    tbl += "<td>"
    tbl += snapshot.val().district
    tbl += "</td>"
    tbl += "<td>"
    tbl += snapshot.val().sector
    tbl += "</td>"
    tbl += "<td>"
    tbl += snapshot.val().village
    tbl += "</td>"
    tbl += "<td>"
    tbl += snapshot.val().phone
    tbl += "</td>"
    tbl += "<td>"
    tbl += snapshot.val().gender
    tbl += "</td>"
    tbl += "<td>"
    tbl += snapshot.val().level
    tbl += "</td>"
    tbl += "<td>"
    tbl += snapshot.val().trade
    tbl += "</td>"
    tbl += "<td>"
    tbl += snapshot.val().year
    tbl += "</td>"
    tbl += "</tr>"

    document.getElementById("tble").innerHTML += tbl;
})



/**  Export The Data To Excel Document **/


function html_table_to_excel(type) {
    var data = document.getElementById('tableData');

    var file = XLSX.utils.table_to_book(data, { sheet: "sheet1" });

    XLSX.write(file, { bookType: type, bookSST: true, type: 'base64' });

    XLSX.writeFile(file, 'Student List.' + type);
}

const export_button = document.getElementById('export');

export_button.addEventListener('click', () => {
    html_table_to_excel('xlsx');
});










function SendTeachers(){
    var fnamet = document.getElementById("fnamet").value 
    var lnamet = document.getElementById("lnamet").value 
    var districtt = document.getElementById("districtt").value 
    var sectort = document.getElementById("sectort").value 
    var gendert = document.getElementById("gendert").value 
    var levelt = document.getElementById("levelt").value 
    var phonet = document.getElementById("phonet").value 
    var tradet = document.getElementById("tradet").value 
    var courset = document.getElementById("courset").value 
    var degreet = document.getElementById("degreet").value 
    var salaryt = document.getElementById("salaryt").value 
    db.ref("teacher").push().set({
        "firstName" : fnamet,
        "lastName" : lnamet,
        "district" : districtt,
        "sector" : sectort,
        "phone" : phonet,
        "gender" : gendert,
        "level" : levelt,
        "trade" : tradet,
        "course" : courset,
        "degree" : degreet,
        "salary" : salaryt
    });
    return false
};

