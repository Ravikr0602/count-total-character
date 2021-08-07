let All_Text = document.getElementById("text");
All_Text.addEventListener("input", () => {
    let count_total = (All_Text.value).length;
    document.getElementById("result").textContent = `Count Characters: ${count_total}`;
});