import React from 'react'

const Home = () => {
    const recommendedShows = [
        { id: 1, title: "뮤지컬 라이온킹", image: "https://picsum.photos/200/280?random=1" },
        { id: 2, title: "뮤지컬 위키드", image: "https://picsum.photos/200/280?random=2" },
        { id: 3, title: "뮤지컬 데스노트", image: "https://picsum.photos/200/280?random=3" },
        { id: 4, title: "뮤지컬 레미제라블", image: "https://picsum.photos/200/280?random=4" },
        { id: 5, title: "뮤지컬 캣츠", image: "https://picsum.photos/200/280?random=5" },
    ];

    return (
        <main id="main" role="main">
            <section className="recommended">
                <h2 className="recommended__title">추천 공연</h2>
                <div className="recommended__list">
                    {recommendedShows.map((show) => (
                        <div key={show.id} className="recommended__item">
                            <img src={show.image} alt={show.title} />
                            <p>{show.title}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default Home
