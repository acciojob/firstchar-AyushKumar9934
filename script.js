function firstChar(text) {
  // your code here
	let newtext=text.trim();
	if(newtext.length==0)return ""
	else return newtext[0];
}
  
// Do not change the code below 

const text = prompt("Enter text:");
alert(firstChar(text));
