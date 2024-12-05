let btn = document.getElementById("sub");

btn.addEventListener("click", () => {
    let t = document.getElementById("text").value;

    let label = document.createElement("label");

    let check = document.createElement("input");
    let btn = document.createElement("button")
    check.type = "checkbox";
    check.className="check"
    check.style.marginLeft="200px"
    check.style.marginTop="20px"


    label.appendChild(check);
    label.appendChild(document.createTextNode(` ${t}`));

    document.body.appendChild(label);

    document.body.append(btn)
    btn.textContent = "Delete"
    btn.style.display = "none"
    let l = label.className = "del"
    let b = btn.className = "del"
    


    document.body.appendChild(document.createElement("br"));
    check.addEventListener("change", () => {
        if (check.checked) {
            label.style.textDecoration = "line-through",
                btn.style.display = "inline-block"

        } else {
            label.style.textDecoration = "none";
            btn.style.display = "none"

        }
        btn.addEventListener("click", () => {
            if (l == b) {
                label.remove()
                btn.style.display = "none"
            }
        });


    });
});
