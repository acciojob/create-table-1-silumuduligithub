function insert_Row() {
    //Write your code here
  let table = document.getElementById("sampleTable");
	let childrens = table.children[0];
	console.log(childrens);
	let tr = document.createElement("tr");
	for(let i = 0; i < 2; i++){
		let td = document.createElement("td");
		if(i == 0){
			td.innerText = "New Cell1";
		}else{
			td.innerText = "New Cell2";
		}
		tr.appendChild(td);
	}
	table.insertBefore(tr, childrens);	
}
