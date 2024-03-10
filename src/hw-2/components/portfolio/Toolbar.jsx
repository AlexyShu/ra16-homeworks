function Toolbar({filters, selected, onSelectFilter}) {

    return (
        <div className="toolbar">
            {filters.map((filter) => {
                return <button
                    className={selected === filter ? 'activePortfolioFilter' : 'portfolioFilter'}
                    key={filter}
                    type="button"
                    onClick={() => {
                        onSelectFilter(filter);
                        console.log(filter)
                    }}
                >
                    {filter}
                </button>
            })}
        </div>
    )

}

export default Toolbar;