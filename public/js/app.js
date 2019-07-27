const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')



weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const location = search.value
    

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch(`/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
        if(data.error){
            messageOne.textContent = data.error;
        } else{
            messageOne.textContent = data.location 
            messageTwo.textContent = data.forecast
            //messageTwo.textContent = data.forecast 
            if(data){
                console.table(data.forecast.daily.data[0].precipType)
                if(data.forecast.daily.icon === 'rain'){
                    document.body.style.backgroundImage = "url('/images/rain.gif')";
                }
                else if(data.forecast.daily.icon === 'clear-day'){
                    document.body.style.backgroundImage = "url('/images/sun.gif')";
                }
                else if(data.forecast.daily.icon === 'rain'){
                    document.body.style.backgroundImage = "url('/images/rain.gif')";
                }
            }
            //document.querySelector('body').style.backgroundColor = "red";
        }
    })
})
})
