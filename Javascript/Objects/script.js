const options = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape",
    "honeydew", "kiwi", "lemon", "mango", "nectarine", "orange", "pear", "quince",
    "raspberry", "strawberry", "tangerine", "ugli", "voavanga", "watermelon", "xigua",
    "yellow watermelon", "zucchini"];

const select = document.getElementById("listes");

for (let i = 0; i < options.length; i++) {
    const option = document.createElement("option");
    option.value = options[i];
    option.text = options[i];
    select.appendChild(option);

}










