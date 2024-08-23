function validateSyntax() {
    // Get the input value from the input box with ID 'petInput'
    const input = document.getElementById('petInput').value;
    // Define a regular expression pattern to match the desired syntax
    const pattern = /^pet_[a-zA-Z0-9]+$/;
    // Get the result element where we will display the validation result
    const resultElement = document.getElementById('result');

    // Check if the input matches the pattern
    if (pattern.test(input)) {
        resultElement.textContent = 'Valid Syntax.';
        resultElement.className = 'valid'; 
    } else {
        resultElement.textContent = 'Invalid Syntax.';
        resultElement.className = 'invalid';  
    }
}
