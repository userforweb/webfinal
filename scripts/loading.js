var content = document.getElementById('content');
var loading = document.getElementById('loading')

content.classList.add('hidden')

function animate() {
    content.classList.remove('hidden')
    loading.classList.add('hidden')
}

setTimeout(animate,2000)

