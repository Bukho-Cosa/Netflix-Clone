const moviesList = [
    {
        id: "tv show",
        title: "Alchemy Of Souls",
        genre: "Fantasy, Romance, Period drama, Action",
        comingSoon: true,
        availDate: 2022,
        image:"scrollable_images/alchemy of souls.jpg",
        video: "netflix-body-video/hd0029_preview.mp4",
    },
    {
        id: "tv show",
        title: "Big mouth",
        genre: "Comedy, Sitcom, Coming of Age",
        comingSoon: true,
        availDate: 2022,
        image:"scrollable_images/big mouth.jpg",
        video: "netflix-body-video/hd0029_preview.mp4",
    },
    {
        id: "tv show",
        title: "Bling Empire",
        genre: "Reality",
        comingSoon: false,
        availDate: 2022,
        image:"scrollable_images/bling empire.jpg",
        video: "netflix-body-video/hd0029_preview.mp4",
    },
    {
        id: "tv show",
        title: "Bridgerton",
        genre: "Regency romance, Period drama, Alternate history, Historical drama",
        comingSoon: true,
        availDate: 0,
        image:"scrollable_images/bridgerton.jpg",
        video: "netflix-body-video/hd0029_preview.mp4",
    },
    {
        id: "tv show",
        title: "Cyberpunk",
        genre: "sci-fi",
        comingSoon: false,
        availDate: 2022,
        image:"scrollable_images/cyberpunk.jpg",
        video: "netflix-body-video/hd0029_preview.mp4",
    },
    {
        id: "tv show",
        title: "Dahmer",
        genre: "Horror, Thriller",
        comingSoon: false,
        availDate: 2022,
        image:"scrollable_images/dahmer.jpg",
        video: "netflix-body-video/hd0029_preview.mp4",
    },
    {
        id: "movie",
        title: "Daniel Sloss",
        genre: "Stand-Up",
        comingSoon: false,
        availDate: 2018,
        image:"scrollable_images/daniel sloss.jpg",
        video: "netflix-body-video/hd0029_preview.mp4",
    },
    {
        id: "tv show",
        title: "Dated and Related",
        genre: "Dating, Romance, Reality",
        comingSoon: false,
        availDate: 2022,
        image:"scrollable_images/dated and related.jpg",
        video: "netflix-body-video/hd0029_preview.mp4",
    },
    {
        id: "tv show",
        title: "Derry Girls",
        genre: "Dark, Comedy, Teen, Sitcom",
        comingSoon: true,
        availDate: 2022,
        image:"scrollable_images/derry girls.jpg",
        video: "netflix-body-video/hd0029_preview.mp4",
    },
    {
        id: "tv show",
        title: "Designing Miami",
        genre: "Reality, Housing, Romance",
        comingSoon: true,
        availDate: 2022,
        image:"scrollable_images/designing miami.jpg",
        video: "netflix-body-video/hd0029_preview.mp4",
    },
    {
        id: "tv show",
        title: "Dynasty",
        genre: "Drama",
        comingSoon: false,
        availDate: 2022,
        image:"scrollable_images/dynasty.jpg",
        video: "netflix-body-video/hd0029_preview.mp4",
    },
    {
        id: "tv show",
        title: "Easy Bake Battle",
        genre: "Game Show",
        comingSoon: false,
        availDate: 2022,
        image: "scrollable_images/easy bake battle.jpg",
        video: "netflix-body-video/hd0029_preview.mp4",
    },
    {
        id: "tv show",
        title: "Emily In Paris",
        genre: "Romance, Comedy",
        comingSoon: true,
        availDate: 2022,
        image:"scrollable_images/emily in pais.jpg",
        video: "netflix-body-video/hd0029_preview.mp4",
    },
    {
        id: "movie",
        title: "Enola Holmes 2",
        genre: "Action, Adventure, Mystery, Drama, Crime",
        comingSoon: true,
        availDate: 2022,
        image:"scrollable_images/Enola Holmes 2.jpg",
        video: "netflix-body-video/hd0029_preview.mp4",
    },
    {
        id: "movie",
        title: "Entergalactic",
        genre: "Romance, Comedy",
        comingSoon: false,
        availDate: 2022,
        image:"scrollable_images/entergalactic.jpg",
        video: "netflix-body-video/hd0029_preview.mp4",
    },
    {
        id: "tv show",
        title: "Fate the Winx Saga",
        genre: "Fantasy, Drama, Supernatural fiction, Adolescence, Dark",
        comingSoon: false,
        availDate: 2022,
        image:"scrollable_images/fate the winx saga.jpg",
        video: "netflix-body-video/hd0029_preview.mp4",
    },
    {
        id: "tv show",
        title: "Good Girls",
        genre: "Comedy, Drama, Crime",
        comingSoon: false,
        availDate: 2022,
        image:"scrollable_images/good girls.jpg",
        video: "netflix-body-video/hd0029_preview.mp4",
    },
    {
        id: "tv show",
        title: "Hasan Minhaj Jester",
        genre: "Stand-Up",
        comingSoon: true,
        availDate: 2022,
        image:"scrollable_images/hasan minhaj jester.jpg",
        video: "netflix-body-video/hd0029_preview.mp4",
    },
    {
        id: "tv show",
        title: "Heart Break High",
        genre: "Adolescence, Drama, Children's television series",
        comingSoon: false,
        availDate: 2022,
        image:"scrollable_images/heart break high.jpg",
        video: "netflix-body-video/hd0029_preview.mp4",
    },
    {
        id: "movie",
        title: "Iliza Hot Forever",
        genre: "Stand-Up",
        comingSoon: true,
        availDate: 2022,
        image:"scrollable_images/iliza hot forever.jpg",
        video: "netflix-body-video/hd0029_preview.mp4",
    },
    {
        id: "tv show",
        title: "Indian Matchmaking",
        genre: "Reality",
        comingSoon: true,
        availDate: 2023,
        image:"scrollable_images/indian matchmaking.jpg",
        video: "netflix-body-video/hd0029_preview.mp4",
    },
    {
        id: "tv show",
        title: "Instant Dream Home",
        genre: "Reality, Renovation",
        comingSoon: false,
        availDate: 2022,
        image:"scrollable_images/instant dream home.jpg",
        video: "netflix-body-video/hd0029_preview.mp4",
    },
    {
        id: "tv show",
        title: "Inventing Anna",
        genre: "Drama",
        comingSoon: false,
        availDate: 2022,
        image:"scrollable_images/invening anna.jpg",
        video: "netflix-body-video/hd0029_preview.mp4",
    },
    {
        id: "tv show",
        title: "Jojo's Bizzare Adventures",
        genre: "Anime, Adventure, Horror, Drama, Suspence, Fiction, Supernatural, Fantasy, Action",
        comingSoon: true,
        availDate: 2022,
        image:"scrollable_images/jojos bizzare adventure.jpg",
        video: "netflix-body-video/hd0029_preview.mp4",
    },
    {
        id: "tv show",
        title: "Love is Blind Aftermath",
        genre: "Reality",
        comingSoon: false,
        availDate: 2022,
        image:"scrollable_images/love is blind aftermath.jpg",
        video: "netflix-body-video/hd0029_preview.mp4",
    },
    {
        id: "tv show",
        title: "Lady Chatterley's Lover",
        genre: "Fiction, Romance, Erotic",
        comingSoon: true,
        availDate: 2022,
        image:"scrollable_images/Lady Chatterley\???s Lover.jpg",
        video: "netflix-body-video/hd0029_preview.mp4",
    },
    {
        id: "tv show",
        title: "Luckiest Girl Alive",
        genre: "Suspence, Thriller, Fiction, Mystery",
        comingSoon: true,
        availDate: 2022,
        image:"scrollable_images/Luckiest Girl Alive.jpg",
        video: "netflix-body-video/hd0029_preview.mp4",
    },
    {
        id: "tv show",
        title: "Manifest",
        genre: "Supernatural, Drama",
        comingSoon: false,
        availDate: 2018,
        image:"scrollable_images/manifest.jpg",
        video: "netflix-body-video/hd0029_preview.mp4",
    },
    {
        id: "tv show",
        title: "Mismatched",
        genre: "Drama",
        comingSoon: false,
        availDate: 2020,
        image:"scrollable_images/mismatched.jpg",
        video: "netflix-body-video/hd0029_preview.mp4",
    },
    {
        id: "movie",
        title: "Mo",
        genre: "Stand-Up",
        comingSoon: true,
        availDate: 2022,
        image:"scrollable_images/mo.jpg",
        video: "netflix-body-video/hd0029_preview.mp4",
    },
    {
        id: "tv show",
        title: "Nailed It",
        genre: "Reality",
        comingSoon: false,
        availDate: 2018,
        image:"scrollable_images/nailed it.jpg",
        video: "netflix-body-video/hd0029_preview.mp4",
    },
    {
        id: "tv show",
        title: "Never Have I Ever",
        genre: "Drama, Coming-of-age, Adolescence, Comedy",
        comingSoon: true,
        availDate: 2023,
        image:"scrollable_images/never have i ever.jpg",
        video: "netflix-body-video/hd0029_preview.mp4",
    },
    {
        id: "tv show",
        title: "Partner Track",
        genre: "Legal drama, Drama",
        comingSoon: false,
        availDate: 2022,
        image:"scrollable_images/partner track.jpg",
        video: "netflix-body-video/hd0029_preview.mp4",
    },
    {
        id: "movie",
        title: "Persuasion",
        genre: "Romance, Drama",
        comingSoon: false,
        availDate: 2022,
        image:"scrollable_images/Persuation.jpg",
        video: "netflix-body-video/hd0029_preview.mp4",
    },
    {
        id: "tv show",
        title: "Queer Eye",
        genre: "Reality",
        comingSoon: false,
        availDate: 2021,
        image:"scrollable_images/queer eye.jpg",
        video: "netflix-body-video/hd0029_preview.mp4",
    },
    {
        id: "tv show",
        title: "Rhythm and Flow",
        genre: "Reality",
        comingSoon: false,
        availDate: 2019,
        image:"scrollable_images/rhythm and flow.jpg",
        video: "netflix-body-video/hd0029_preview.mp4",
    },
    {
        id: "tv show",
        title: "Chilling Adventures of Sabrina",
        genre: "Adolescence, Drama, Mystery, Horror, Fiction, Supernatural, Dark, Fantasy",
        comingSoon: true,
        availDate: 2022,
        image:"scrollable_images/sabrina.jpg",
        video: "netflix-body-video/hd0029_preview.mp4",
    },
    {
        id: "tv show",
        title: "Seven Deadly Sins",
        genre: "Anime, Japanese, Fantasy",
        comingSoon: false,
        availDate: 2022,
        image:"scrollable_images/seven deadly sins.jpg",
        video: "netflix-body-video/hd0029_preview.mp4",
    },
    {
        id: "tv show",
        title: "She-Ra and the Princess of Power",
        genre: "Action, Adventure, Magic, Comdedy, Drma, Fiction, Superhero, Animation, Science Fantasy",
        comingSoon: false,
        availDate: 2020,
        image:"scrollable_images/she-ra.jpg",
        video: "netflix-body-video/hd0029_preview.mp4",
    },
    {
        id: "tv show",
        title: "Spirit Rangers",
        genre: "Native, Action, Children, Animation, Superhero",
        comingSoon: false,
        availDate: 2022,
        image:"scrollable_images/spirit rangers.jpg",
        video: "netflix-body-video/hd0029_preview.mp4",
    },
    {
        id: "tv show",
        title: "Stranger Things",
        genre: "Horror, Fiction, Thriller, Drama, Supernatural, Mystery, Historical drama",
        comingSoon: false,
        availDate: 2022,
        image:"scrollable_images/stranger things.jpg",
        video: "netflix-body-video/hd0029_preview.mp4",
    },
    {
        id: "tv show",
        title: "The Comedy LineUp",
        genre: "Stand-Up",
        comingSoon: false,
        availDate: 2018,
        image:"scrollable_images/the comedy lineup.jpg",
        video: "netflix-body-video/hd0029_preview.mp4",
    },
    {
        id: "tv show",
        title: "The Crown",
        genre: "History, Drama, Historical drama",
        comingSoon: true,
        availDate: 2022,
        image:"scrollable_images/the crown.jpg",
        video: "netflix-body-video/hd0029_preview.mp4",
    },
    {
        id: "movie",
        title: "The Curse of Bridge Hollow",
        genre: "Comedy, Children, Adventure",
        comingSoon: false,
        availDate: 2022,
        image:"scrollable_images/The Curse of Bridge Hollow.jpg",
        video: "netflix-body-video/hd0029_preview.mp4",
    },
    {
        id: "tv show",
        title: "The Empress",
        genre: "Romance, Period drama, Epic, Historical drama",
        comingSoon: false,
        availDate: 2022,
        image:"scrollable_images/the empress.jpg",
        video: "netflix-body-video/hd0029_preview.mp4",
    },
    {
        id: "tv show",
        title: "The Midnight Club",
        genre: "Thriller, Horror, Fiction",
        comingSoon: true,
        availDate: 2022,
        image:"scrollable_images/the midnight club 1.jpg",
        video: "netflix-body-video/hd0029_preview.mp4",
    },
    {
        id: "tv show",
        title: "The Mole",
        genre: "Reality, Game show, Mystery",
        comingSoon: true,
        availDate: 2022,
        image:"scrollable_images/the mole.jpg",
        video: "netflix-body-video/hd0029_preview.mp4",
    },
    {
        id: "movie",
        title: "The Redeem Team",
        genre: " ",
        comingSoon: true,
        availDate: 2022,
        image:"scrollable_images/the redeem team.jpg",
        video: "netflix-body-video/hd0029_preview.mp4",
    },
    {
        id: "tv show",
        title: "The Sandman",
        genre: "Fiction, Superhero, Horro, Drama",
        comingSoon: false,
        availDate: 2022,
        image:"scrollable_images/the sandman.jpg",
        video: "netflix-body-video/hd0029_preview.mp4",
    },
    {
        id: "tv show",
        title: "The Watcher",
        genre: "Mystery, Horror, Fiction",
        comingSoon: true,
        availDate: 2022,
        image:"scrollable_images/the watcher.jpg",
        video: "netflix-body-video/hd0029_preview.mp4",
    },
    {
        id: "tv show",
        title: "Uncoupled",
        genre: "Romance, Comdey, Drama",
        comingSoon: false,
        availDate: 2022,
        image:"scrollable_images/uncoupled.jpg",
        video: "netflix-body-video/hd0029_preview.mp4",
    },
    {
        id: "tv show",
        title: "Wild Croc Territory",
        genre: "Reality",
        comingSoon: true,
        availDate: 2022,
        image:"scrollable_images/wild croc territory.jpg",
        video: "netflix-body-video/hd0029_preview.mp4",
    }]
    
    function isComingSoon(list){
        return list.comingSoon === true;
    }
    
    console.log(moviesList.find(isComingSoon));
    
    function named(array){
        if(array.comingSoon === true){
            console.log(array.title);
        }
    }
    
    console.log(moviesList.find(named));
    
    /*if(moviesList.comingSoon == false){
        return moviesList.id;
    }*/
    console.log('hello');
    console.log(moviesList.length);
    console.log(moviesList.forEach.call.availDate);

    function imaged(array){
        const div = document.querySelector('#body');
        if(array.comingSoon === true){
            return array.image;
        }
    
        const result = moviesList.find(imaged);
    
        div.innertext = result;
    } /*didn't work*/
    