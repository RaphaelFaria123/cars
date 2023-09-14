import React from 'react';

const Accordion = ({ items, index }) => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const renderedItems = items.map((item, i) => {
        const isExpanded = i === expandedIndex;

        return (
            <div key={item.id}>
                <div onClick={() => { setExpandedIndex(i) }}>{item.label}</div>
                {isExpanded && <div>{item.content}</div>
                }
            </div>
        );
    });

    return <div className="ui styled accordion">{renderedItems}</div>
};

export default Accordion;