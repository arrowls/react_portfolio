export default function Filters({ selected, handler, items}) {
    return (
        <div className="s-filters__container">
            {items.map((item, index) =>
                <button
                   key={index}
                   onClick={() => handler(item)}
                   className={`s-filters__filter ${selected === item ? 'selected' : ''}`}>{item}
                </button>)}
        </div>
    )
}
