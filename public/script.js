const movieDetails = [
    {
        'main-folder':'Aadu3',
        'poster-img':'Aadu 3.png',
        'name':'Aadu 3',
        'release-year':'2026',
        'language':'MALAYALAM',
        'uploaded-timeline':'3 weeks ago',
        'rating-score':42,
        'discussion-score':13,
        'ratings':{
            'action':4.5,
            'comedy':3.0,
            'romance':1.0,
            'storyline':2.3,
            'performance':4.7
        },
        'additional-details':['Wiki','Trailer'],
        'actor-folder':'Aadu3-actors',
        'actors':[
            {
                'img-name':'Jayasurya.png',
                'name':'Jayasurya',
                'role':'Lead Actor'
            },
            {
                'img-name':'saiju.png',
                'name':'Saiju',
                'role':'Supporting Actor'
            },
            {
                'img-name':'sunny.png',
                'name':'Sunny',
                'role':'Supporting Actor'
            },
            {
                'img-name':'vinayakan.png',
                'name':'Vinayakan',
                'role':'Supporting Actor'  
            }
        ]

    },
    {
        'main-folder':'Ashakal Ayiram',
        'poster-img':'Ashakal Aayiram.png',
        'name':'Ashakal Aayiram 3',
        'release-year':'2026',
        'language':'MALAYALAM',
        'uploaded-timeline':'1 weeks ago',
        'rating-score':30,
        'discussion-score':10,
        'ratings':{
            'action':3.5,
            'comedy':4.0,
            'romance':3.0,
            'storyline':3.3,
            'performance':4.2
        },
        'additional-details':['Wiki','Trailer'],
        'actor-folder':'Ashakal Aayiram-actors',
        'actors':[
            {
                'img-name':'jayaram.png',
                'name':'Jayaram',
                'role':'Lead Actor'
            },
            {
                'img-name':'kalidas.png',
                'name':'Kalidas Jayaram',
                'role':'Leading Actor'
            },
            {
                'img-name':'Asha.png',
                'name':'Asha Sharath',
                'role':'Supporting Actor'
            },
            {
                'img-name':'ishani.png',
                'name':'Ishani Krishna',
                'role':'Supporting Actor'  
            }
        ]

    }
    
]


let actorInt=0;
let movieCount=0;




function displayMovie(){
    const moviePoster = document.querySelector('.movie-poster');
    const movieCardAttr = document.querySelector('.movie-details');

    if(movieCount>=movieDetails.length)
    {
        movieCount=0;
    }
    const movie = movieDetails[movieCount];
    moviePoster.innerHTML = `
    <img src="../assets/images/movie-ranking-project/${movie['main-folder']}/${movie['poster-img']}" alt="${movie['name']}" />
    `;
    movieCardAttr.innerHTML = `
                <h2>${movie['name']}</h2>
                <p>
                  ${movie['release-year']} ${movie['language']}
                  <span class="hd-band">HD</span>
                </p>
                <div class="poster-nav">
                  <i class="fa-regular fa-calendar-plus">
                    <span>${movie['uploaded-timeline']}</span></i>
                  <i class="fa-solid fa-award"> <span>${movie['rating-score']}</span> </i>
                  <i class="fa-regular fa-comments"> <span>${movie['discussion-score']}</span> </i>
                </div>
                <ul class="rating-section">
                  <li>
                    <label for="action">Action</label>
                    <p class="rating-fig">${movie['ratings']['action']}</p>
                    <i class="fa-solid fa-star rating-fig"></i>
                    <div class="rating-box">
                      <span class="rating-fill" style="width: ${(movie['ratings']['action']/5)*100}%"></span>
                    </div>
                  </li>
                  <li>
                    <label for="action">Comedy</label>
                    <p class="rating-fig">${movie['ratings']['comedy']}</p>
                    <i class="fa-solid fa-star rating-fig"></i>
                    <div class="rating-box">
                      <span class="rating-fill" style="width: ${(movie['ratings']['comedy']/5)*100}%"></span>
                    </div>
                  </li>
                  <li>
                    <label for="action">Romance</label>
                    <p class="rating-fig">${movie['ratings']['romance']}</p>
                    <i class="fa-solid fa-star rating-fig"></i>
                    <div class="rating-box">
                      <span class="rating-fill" style="width: ${(movie['ratings']['romance']/5)*100}%"></span>
                    </div>
                  </li>
                  <li>
                    <label for="action">Storyline</label>
                    <p class="rating-fig">${movie['ratings']['storyline']}</p>
                    <i class="fa-solid fa-star rating-fig"></i>
                    <div class="rating-box">
                      <span class="rating-fill" style="width: ${(movie['ratings']['storyline']/5)*100}%"></span>
                    </div>
                  </li>
                  <li>
                    <label for="action">Performance</label>
                    <p class="rating-fig">${movie['ratings']['performance']}</p>
                    <i class="fa-solid fa-star rating-fig"></i>
                    <div class="rating-box">
                      <span class="rating-fill" style="width: ${(movie['ratings']['performance']/5)*100}%"></span>
                    </div>
                  </li>
                </ul>
    `;

}

function displayActor(){
    const actorCard = document.querySelector('.actor-section-slider');
    const movie = movieDetails[movieCount];
    const actor = movie['actors'][actorInt];
    actorCard.innerHTML=`
        <div class="actor-card">
                <img
                  src="../assets/images/movie-ranking-project/${movie['main-folder']}/${movie["actor-folder"]}/${actor['img-name']}"
                  alt="${actor['name']} Image"
                />
                <div class="actor-details">
                  <p>${actor['name']} <br /><span>${actor['role']}</span></p>
                </div>
              </div>
    `;
    
}

function startCarousel(){
    displayMovie();
    displayActor();
    actorTimer = setInterval(function () {

        actorInt++;
        if(actorInt>=movieDetails[movieCount].actors.length)
        {
            actorInt = 0;
            if(movieCount>=movieDetails.length)
            {
                movieCount=0
            }
            else{
                movieCount++;
            }
            
            displayMovie();
            displayActor();
        }
        else{
            displayActor();
        }
    },1600);

}

startCarousel();