console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form has been submitted successfully!');
}




let form = document.querySelector('#contact');
let image = document.querySelector('img')

form.addEventListener('submit', handleSubmit);
image.addEventListener('mouseover', () =>{
	alert('give the user a compliment')
})