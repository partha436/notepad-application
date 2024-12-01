// Function to save the text as a .txt file
function saveText() {
    const text = document.getElementById('notepad').value;
    
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/create', true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onload = function () {
        if (xhr.status === 201) {
            console.log(JSON.parse(xhr.responseText));
        } else {
            console.error('Error:', xhr.statusText);
        }
    };
    xhr.onerror = function () {
        console.error('Request failed');
    };
    xhr.send(JSON.stringify({ content: text }));

}

// Function to clear the textarea content
function clearText() {
    document.getElementById('notepad').value = '';
}
