
var e = document.getElementById("ddlViewBy");
var value = e.value;
var text = e.options[e.selectedIndex].text;
var category = text;
var generateBtn = document.querySelector('.generator')

window.addEventListener('load',getQuote(category))

generateBtn.addEventListener('click',() =>{
    var e = document.getElementById("ddlViewBy");
    var value = e.value;
    var text = e.options[e.selectedIndex].text;
    var category = text;
        getQuote(category)
        console.log('click')
    
})

function getQuote(category){ 
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
    headers: { 'X-Api-Key': 'illML6cZ3q677VHSpCeUnA==QAv56pdQLABaZiUs'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result[0]);
        const quot = document.querySelector('.quote')
        quot.innerHTML = ''
        let quote = `<h3>${result[0].quote}</h3>`
        
        quot.innerHTML+=quote
        let outhor = `<i>--${result[0].author}--</i>`
        quot.innerHTML+= outhor

    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});
}