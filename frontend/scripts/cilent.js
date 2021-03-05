function parseData () {
    return;
}

function passentity () {
    const data = {
        "name": "Wade Wilson",
        "occupation": "Murderer",
        "age": "30 (forever)"
    }
    
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch('/createTable', options).then(response => {
        console.log(response)
    });
}

function passRelationship () {
    return;
}