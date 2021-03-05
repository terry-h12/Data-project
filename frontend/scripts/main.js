class entity {
    constructor(name, primary_key, attributes, subtypes, cannot_exist_without) {
        this.name = name;
        this.primary_key = primary_key;
        this.attributes = attributes;
        this.subtypes = subtypes;
        this.cannot_exist_without = cannot_exist_without;
    }
};

var entity_data = new Map();

var myModal = document.getElementById('entityModal');
// var myInput = document.getElementById('myInput');

myModal.addEventListener('shown.bs.modal', function () {
    // myInput.focus();
    document.getElementById('entity-name').value = '';
    document.getElementById('primary-key').value = '';
    document.getElementById('attribute').value = '';
    document.getElementById('subtypes').value = '';
    document.getElementById('cannot-exist-without').value = '';
});

function saveAdd() {
    let name = document.getElementById('entity-name').value;
    let pk = document.getElementById('primary-key').value;
    let attributes = document.getElementById('attribute').value;
    let subtypes = document.getElementById('subtypes').value;
    let cannot_exist_without = document.getElementById('cannot-exist-without').value;
  
    createEntity(name, pk, attributes, subtypes, cannot_exist_without);

    passentity();

    let entity_id = 0;
    let my_html_content = 
                        `<tr>
                            <td>${name}</td>
                            <td>
                                <button type="button" class="btn btn-outline-secondary" onClick="info()" id = ${name}>
                                    <img src="assets/info-circle.svg">
                                </button>
                            </td>
                        </tr>`;
    let table_ref = document.getElementById('entTable');
    let new_row = table_ref.insertRow(table_ref.rows.length);
    new_row.innerHTML = my_html_content;
}

function createEntity(name, pk, attributes, subtypes, cannot_exist_without) {
    let temp = new entity(name, pk, attributes, subtypes, cannot_exist_without);
    entity_data.set(name, temp);
}

let save_button = document.getElementsByClassName('save');

function info() {
    alert(this);
}
