import React, {useState} from 'react';
import FilterItem from "../../UI/filterItem/FilterItem";


const FiltersList = ({filters}) => {

    const [showList, setShowList] = useState(false)

    return (
        <>
            {
                filters?.map((item, i) => (
                    <div key={i}>
                        <FilterItem showList={showList} setShowList={setShowList} prop={item} foCss={`block${i}`}/>
                    </div>
                ))
            }
        </>
    );
};


export default FiltersList;