
document.getElementById('noakhali-donate-btn').addEventListener('click', function(){
    const balance = getText('account-balance');
    const noakhaliBalance = getText('noakhali-balance');
    const input = getInputValue('noakhali-donate-input');
    const title = document.getElementById('noakhali-title').innerText;
    if(input < 0 || isNaN(input)){
        alert("Invalid Input")
        return;
    }
    else{
        const newNoakhaliBalance = noakhaliBalance + input;
        const nwb = balance - input;
        document.getElementById('noakhali-balance').innerText = newNoakhaliBalance;
        document.getElementById('account-balance').innerText = nwb;
        my_modal_1.showModal()
        const div = document.createElement('div')
        div.className = "bg-base-100 border-solid border-2 rounded-md m-3"
        div.innerHTML = `
            <p class="text-2xl py-3 font-bold">${input} taka will be donated to ${title}</p>
            <p class="text-xs text-gray-500">${new Date()}</p>
        `;
        document.getElementById('history-page').appendChild(div)

    }
});

document.getElementById('feni-donate-btn').addEventListener('click', function(){
    const balance = getText('account-balance');
    const noakhaliBalance = getText('feni-balance');
    const input = getInputValue('feni-donate-input');
    const title = document.getElementById('feni-title').innerText;
    if(input < 0 || isNaN(input)){
        alert("Invalid Input")
        return;
    }
    else{
        const newNoakhaliBalance = noakhaliBalance + input;
        const nwb = balance - input;
        document.getElementById('feni-balance').innerText = newNoakhaliBalance;
        document.getElementById('account-balance').innerText = nwb;
        my_modal_1.showModal()
        const div = document.createElement('div')
        div.className = "bg-base-100 border-solid border-2 rounded-md m-3"
        div.innerHTML = `
            <p class="text-2xl py-3 font-bold">${input} taka will be donated to ${title}</p>
            <p class="text-xs text-gray-500">${new Date()}</p>
        `;
        document.getElementById('history-page').appendChild(div)

    }
});

document.getElementById('quota-donate-btn').addEventListener('click', function(){
    const balance = getText('account-balance');
    const noakhaliBalance = getText('quota-balance');
    const input = getInputValue('quota-donate-input');
    const title = document.getElementById('quota-title').innerText;
    if(input < 0 || isNaN(input)){
        alert("Invalid Input")
        return;
    }
    else{
        const newNoakhaliBalance = noakhaliBalance + input;
        const nwb = balance - input;
        document.getElementById('quota-balance').innerText = newNoakhaliBalance;
        document.getElementById('account-balance').innerText = nwb;
        my_modal_1.showModal()
        const div = document.createElement('div')
        div.className = "bg-base-100 border-solid border-2 rounded-md m-3"
        div.innerHTML = `
            <p class="text-2xl py-3 font-bold">${input} taka will be donated to ${title}</p>
            <p class="text-xs text-gray-500">${new Date()}</p>
        `;
        document.getElementById('history-page').appendChild(div)

    }
});