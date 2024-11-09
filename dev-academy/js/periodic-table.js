// This File is for the sake that undiscovered elements sould not be shown, but, we might want to add them in future.
let showUndiscoveredElements = false;
const collection = document.getElementsByClassName("pt-unknown-period");
if (showUndiscoveredElements === false) {
    for (let i = 0; i < collection.length; i++) {
        collection[i].style.display = "none";
    }
} else {
    for (let i = 0; i < collection.length; i++) {
        collection[i].style.display = "absolute";
    }
}
