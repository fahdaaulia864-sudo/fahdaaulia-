function insertData(i) {
    document.form.view.value = document.form.view.value + i;
}
function clearData() {
    const i = document.form.view.value;
    if (i == "") {
        alert("tidak ada angka untuk dihapus!");
    } else {
        document.form.view.value = "";
    }
}
function deleteData() { 
    const i = document.form.view.value; 
    if (i == "") { 
        alert("tidak ada angka untuk dihapus!"); 
    } else { document.form.view.value = i.slice(0, -1); } 
}
function aqual() {
    const i = document.form.view.value;
    if (i == ""){
         alert("silahkan isi angka terlebih dahulu!");
    }else{
        try{
            document.form.view.value = eval(i);
        } catch (error) {
            alert("eksperi tidak valid!");
        }
    }
}


