const amountinput=document.getElementById("amount");
const fromcurency=document.getElementById("fromcurency");
const tocurency=document.getElementById("tocurency");
const result=document.getElementById("result");
const cbuttondiv=document.getElementById("button");
const apiurl="https://v6.exchangerate-api.com/v6/4cf74cb6e086b3c831a7cdce/latest"
cbuttondiv.addEventListener("click",()=>{
    const amount=parseFloat(amountinput.value);
    console.log(amount);
    const fc=fromcurency.value;
    const tc=tocurency.value;
   // string literal
    const query=`${apiurl}/${fc}`;
    console.log(query);

    fetch(query)
    .then(response => response.json())
    .then(data => {
        const rate = data.conversion_rates[tc];
        const converted = (amount * rate).toFixed(2);
        result.value= `${amount} ${fc} = ${converted} ${tc}`;
        console.log("Conversion successful:", result.value);
    })
    .catch(error => {
        console.error("Error fetching exchange rate:", error);
        result.value = "Error getting exchange rate.";
    });
});