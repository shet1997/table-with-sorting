import React from 'react';

const ExampleTable = (props) => {
    const { paginatedData, renderSortIcon, onSortChange } = props;
    return ( 
        <table className="table table-striped">
            <thead>
                <tr>
                    <th onClick={() => onSortChange("rank_display")}>rank {renderSortIcon()}</th>
                    <th onClick={() => onSortChange("title")}>university {renderSortIcon()}</th>
                    <th onClick={() => onSortChange("score")}>overall {renderSortIcon()}</th>
                    <th onClick={() => onSortChange("ind_2")}>emplyoability {renderSortIcon()}</th>
                    <th onClick={() => onSortChange("ind_1")}>classprofile {renderSortIcon()}</th>
                    <th onClick={() => onSortChange("ind_0")}>faculty and teaching {renderSortIcon()}</th>            
                </tr>
            </thead>
            <tbody>
                {
                    paginatedData.map(item => {
                    return (<tr key={item.core_id}>
                        <td>{item.rank_display}</td>
                        <td>
                            <div><a href="#">{item.title}</a></div>
                            <div className="university_region"><i className="fa fa-map-marker mr-1" aria-hidden="true"></i>{item.region}</div>
                        </td>
                        <td className="score_td"><div className="scr_bcg">{item.score}</div></td>
                        <td>{item.ind_2}</td>
                        <td>{item.ind_1}</td>
                        <td>{item.ind_0}</td>
                    </tr> )
                    })
                }
            </tbody>
        </table>
     );
}
 
export default ExampleTable;