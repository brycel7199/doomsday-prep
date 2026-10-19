
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
