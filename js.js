const img = document.getElementById('img_test')
x = ["a1.png","a2.png","a3.png"]
get = 0
sum = 0

for (let i = 0, len = x.length; i < len; i++) {
    sum = i
}

function cilckback() {
    get -= 1
    if (get < 0) {
        get = sum
    }
    img.src = 'img/' + x[get]
}

function cilcknext() {
    console.log(get)
    get += 1
    if (get > sum) {
        get = 0
    }
    img.src = 'img/' + x[get]
}