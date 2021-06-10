var names_array=[];
function submit() {
    var name=document.getElementById("name_input").value;  
    console.log(name);
    names_array.push(name);
    var length_of_array=names_array.length;
    console.log(length_of_array);
    document.getElementById("display_names").innerHTML=names_array;
}
function show_names() {
    var i=names_array.join("<br>");
    document.getElementById("vertical").innerHTML=i;
}
function sort_names() {
    names_array.sort();
    var i=names_array.join("<br>");
    document.getElementById("sort").innerHTML=i;
}
function search() {
   s=document.getElementById("search_name").value;
   found=0;
   for (var j = 0;j<names_array.length;j++) {
       if (s==names_array[j]) {
           found=found+1;
       }
       document.getElementById("the_names").innerHTML="Names found "+found+" times";
   } 
}