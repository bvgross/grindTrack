function App() {
    return (
        <div>
            <nav className="nav">
                <section className="nav-links">
                    <div className="nav-links__link">Track</div>
                    <div className="nav-links__link">Analize</div>
                </section>
                <i className="nav--menu fa fa-bars" aria-hidden="true"></i>
            </nav>
            <main>
                <div className="card">
                    <label className="card-label" htmlFor="name">Exercise name</label>
                    <input className="card-input" id="name" type="text" />
                </div>
            </main>
        </div>
    );
};

export default App;