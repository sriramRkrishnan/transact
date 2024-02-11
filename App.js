let list = document.querySelector('.list')
let Tname = document.querySelector('.name')
let amt = document.querySelector('.amt')
let add = document.querySelector('.add')
let type = document.querySelector('.Type')

// actions edit and delete

// actions edit and delete

let AllData = [];

const AddList = () => {
    // Create a new data object
    let newData = {
        type: type.value,
        Tname: Tname.value,
        amt: amt.value
    };

    // Check if the item already exists
    let existingIndex = AllData.findIndex((item) => item.Tname === newData.Tname);
    if (existingIndex !== -1) {
        // Update the existing item
        AllData[existingIndex] = newData;
    } else {
        // Add the new item
        AllData.push(newData);
    }

    // Clear input fields
    Tname.value = '';
    amt.value = '';
    list.innerHTML = '';

    // Render all items in AllData
    AllData.forEach((item) => {
        renderListItem(item);
    });
};

const renderListItem = (item) => {
    let div = document.createElement('div');
    div.classList.add('item');
    let para1 = document.createElement('p');
    let para2 = document.createElement('p');
    let para3 = document.createElement('p');

    let edit = document.createElement('i');
    edit.classList.add('fa-solid');
    edit.classList.add('edit');
    edit.classList.add('fa-pen-to-square');

    let deleteItem = document.createElement('i');
    deleteItem.classList.add('fa-solid');
    deleteItem.classList.add('fa-trash');
    deleteItem.classList.add('delete');

    let iconDiv = document.createElement('div');

    para1.innerText = item.Tname;
    para2.innerText = item.type;
    para3.innerText = item.amt;
    div.appendChild(para1);
    div.appendChild(para2);
    div.appendChild(para3);
    iconDiv.appendChild(edit);
    iconDiv.appendChild(deleteItem);
    div.appendChild(iconDiv);
    list.appendChild(div);

    edit.addEventListener('click', () => {
        // Set input values to item values
        type.value = item.type;
        Tname.value = item.Tname;
        amt.value = item.amt;

        AllData = AllData.filter((data) => data.Tname !== item.Tname);
        list.innerHTML = '';
        AllData.forEach((item) => {
            renderListItem(item);
        });
    });

    deleteItem.addEventListener('click', () => {
        // Filter out the item from AllData
        AllData = AllData.filter((data) => data.Tname !== item.Tname);

        // Clear the list and re-render all items
        list.innerHTML = '';
        AllData.forEach((item) => {
            renderListItem(item);
        });

        console.log(AllData);
    });
};

add.addEventListener('click', AddList);
