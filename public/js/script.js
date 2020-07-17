console.log('inside public')

const newsPlaceholder = document.querySelector('#newsPlaceholder')

const news = async ()=>{
    const response =  await fetch('/api/news')
    const data = await response.json();
    let element = ''

    await data.forEach((news)=>{
        element +=`
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
           <img style="width: 100%;" src="${news.urlToImage}">
            <div class="card-body">
                <p class="card-text"><a href="${news.url}" target="_blank">${news.title}</a></p>
                <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                ${news.source.name}
                   
                </div>
                <small class="text-muted"> ${new Date(news.publishedAt).toLocaleDateString()}</small>
                </div>
            </div>
            </div>
      </div>
        
        `
    })

    newsPlaceholder.innerHTML = element;

}
news()