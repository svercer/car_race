$(function(){
    // localStorage display
    console.log('margin-right',$('#car1').css('margin-right'));
    let localBody = document.getElementById('tableStorage')
    let localRow1 = document.createElement('tr')
    let localRow2 = document.createElement('tr')
    localRow1.setAttribute('class', 'borderRow')
    localRow2.setAttribute('class', 'borderRow')
    
    if (localStorage.getItem('time1') < localStorage.getItem('time2')) {
        $(localRow1).html(`<td><span class='white'>Car1</span> Finished in <span class='white'>First</span> place with a time at: <span class='white'>${localStorage.getItem('time1')}</span> milseconds</td>`)
        $(localRow2).html(`<td><span class='red'>Car2</span> Finished in <span class='red'>Second</span> place with a time at: <span class='red'>${localStorage.getItem('time2')}</span> milseconds</td>`)
        
    } else if (localStorage.getItem('time1') > localStorage.getItem('time2')){
        
        $(localRow1).html(`<td><span class='white'>Car1</span> Finished in <span class='white'>Second</span> place with a time at: <span class='white'>${localStorage.getItem('time1')}</span> milseconds</td>`)
        $(localRow2).html(`<td><span class='red'>Car2</span> Finished in <span class='red'>First</span> place with a time at: <span class='red'>${localStorage.getItem('time2')}</span> milseconds</td>`)
    }
    localBody.appendChild(localRow1)
    localBody.appendChild(localRow2)

   niza = []

   function activate(){
    $('#zname').css('visibility', 'visible')
    $('#cars').css('opacity', '0.5')
    $('#btnOver').removeAttr('disabled');
   }

    // Car race ==========================================================================================
    $('#btnRace').on('click', function () {
        $('#btnRace').attr('disabled', 'disabled')
        $('#btnOver').attr('disabled', 'disabled');
        let time1 = Math.floor((Math.random() * 5000) + 1)
        let time2 = Math.floor((Math.random() * 5000) + 1)
        counter = 4
        let timer = setInterval(function(e) {
            $('#timer').fadeIn();
            counter--
            $('#timer').html(`<p class='counter'>${counter}</p>`)
            if (counter == 0) {
                // counter 
                clearInterval(timer)
                // counter.fadeOut();
                if (counter == 0) {
                    $('#timer').fadeOut();
                    race()
                }
            }
            console.log('counter',counter);
        }, 1000)
        moveToLeftCar1 = $(window).width() - $('#car1').width()
        moveToLeftCar2 = $(window).width() - $('#car2').width()
        
        //  race function
        function race() {
            let iscomplete1 = false
            let iscomplete2 = false
            // first car ==========================================================================================================
            $('#car1').animate({
                marginLeft: `${moveToLeftCar1}`,
            }, time1, function () {
                iscomplete1 = true
                if (iscomplete1) {
                    activate()
                }
               let display = {
                   time:time1
               }
               niza.push(display)
               let displayTime1 = document.createElement('td')
            //    checkWinner(time1, time2)
                if (time1 < time2) {
                    $(displayTime1).html(`Finished in <span class='white'>First</span> place with a time at: <span class='white'>${display.time}</span> milseconds`)
                } else {
                    $(displayTime1).html(`Finished in <span class='white'>Second</span> place with a time at: <span class='white'>${display.time}</span> milseconds`)
                    // return displayTime1
                }
                let tbody = document.getElementById('left')
                let row = document.createElement('tr')
                row.setAttribute('class', 'borderRow')
                
                row.appendChild(displayTime1)
                tbody.appendChild(row)

                localStorage.setItem('time1', time1)
                localStorage.setItem('time2', time2)
            }) 
            // second car ========================================================================================
            $('#car2').animate({
                marginLeft: `${moveToLeftCar2}`,
            }, time2, function(){
                iscomplete2 = true
                if (iscomplete2) {
                    activate()
                }
                
                let display = {
                    time:time2
                }
                let displayTime2 = document.createElement('td')
                let place = 'Second'
                 if (time2 < time1) {
                     place = 'First'
                     console.log(place);
                     
                     $(displayTime2).html(`Finished in <span class='red'>${place}</span> place with a time at: <span class='red'>${display.time}</span> milseconds`)
                 } else {
                     $(displayTime2).html(`Finished in <span class='red'>${place}</span> place with a time at: <span class='red'>${display.time}</span> milseconds`)
                 }
                 let tbody = document.getElementById('right')
                 let row = document.createElement('tr')
                 row.setAttribute('class', 'borderRow')
                 
                 row.appendChild(displayTime2)
                 tbody.appendChild(row)
            })
            // console.log('complete', iscomplete1);
        }
    });

// race over 
    $('#btnOver').on('click', function(){
        $('#zname').css('visibility', 'hidden')
        $('#car1').animate({
            marginLeft: '0',
        }, 10) 
        $('#car2').animate({
            marginLeft: '0',
        }, 10)
        $('#btnRace').removeAttr("disabled");
        $('#cars').css('opacity', '1')
        // counter = 5
    })

    
    
    // displayTime2.innerHTML(`<Finished>Finished in place with a time at: ${time2} milseconds</Finished>`)

    
    // $(right).appendChild(displayTime2)
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});//jQuery 