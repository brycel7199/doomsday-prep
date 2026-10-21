
//Local Storage for Timeline Checkboxes
const checkboxes = document.querySelectorAll('input[type="checkbox"]')

checkboxes.forEach((cb, index) => {
  //Load Saved State
  const storageKey = cb.id || `checkbox-${index}`;
  const savedValue = localStorage.getItem(storageKey);
  cb.checked = savedValue === "true";

  //Save Current State
  cb.addEventListener("change", ()=>{
    localStorage.setItem(storageKey, cb.checked);
  });

});

/*
const tbody = document.querySelector('#timeline-table tbody');

mcuData.forEach(item => { const row = <tr> <td><input type="checkbox" ${item.watched ? 'checked' : ''}></td> <td>${item.name}</td> <td>${item.medium}</td> <td>${item.date}</td> <td>${item.release}</td> </tr>; tbody.insertAdjacentHTML('beforeend', row); });
*/