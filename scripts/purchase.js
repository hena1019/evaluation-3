main()
function main() 
{
    var purchaseddata = JSON.parse(localStorage.getItem("purchase"))

    append(purchaseddata);
    var userdata=JSON.parse(localStorage.getItem("user"));
    var balance=userdata.wallet;
    document.querySelector("#wallet_balance").innerText=balance;
    document.querySelector("#balance").innerText=balance;
}
function append(data) {
    var container = document.querySelector("#purchased_vouchers");
    data.forEach(function (ele) {
        var div = document.createElement("div");
        div.setAttribute("class", "voucher");

        var pic = document.createElement("img");
        pic.src = ele.image;

        var name = document.createElement("p");
        name.innerText = ele.name;

        var price = document.createElement("p");
        price.innerText = ele.price;

        div.append(pic, name, price);
        container.append(div);
    })
}

