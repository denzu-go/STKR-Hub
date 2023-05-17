document.querySelector('#sub-nav').style.display = ('block');

// for text-spinner
$(document).on('click', '.number-spinner button', function () {    
	var btn = $(this),
		oldValue = btn.closest('.number-spinner').find('input').val().trim(),
		newVal = 0;
	
	if (btn.attr('data-dir') == 'up') {
		newVal = parseInt(oldValue) + 1;
	} else {
		if (oldValue > 1) {
			newVal = parseInt(oldValue) - 1;
		} else {
			newVal = 1;
		}
	}
	btn.closest('.number-spinner').find('input').val(newVal);
});

function detect(){
	// get the value of the input field
	const value = document.getElementById('quantity-input').value;
	// update the value of the input field

	if (value > 99){
		const updated = document.getElementById('quantity-input').value = 1;
	} else {
		console.log("Error: Cannot update quantity");
	}
	
	// write result
	document.getElementById('result') = updated;	
}