import React from "react";
import "@/app/components/styles/statistic_style.css";

export const TableSta = () =>{
    const textStyle = {
        color: 'white',
    };

    return (
        <div className="table-wrapper">
            <table className="table">
                <thead>
                    <tr>
                        <th style={textStyle}>Page</th>
                        <th style={textStyle} className="expand">Description</th>
                        <th style={textStyle}>Status</th>
                        <th style={textStyle}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={textStyle}>Home</td>
                        <td style={textStyle}>This is the main page</td>
                        <td style={textStyle}>
                            <span style={textStyle} className="labe label-live">Live</span>
                        </td>
                        <td >
                            <span style={textStyle}>
                                {/* <BsFillTrashFill/>
                            <BsFillPencilFill/> */}
                            </span>
                        </td>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <td style={textStyle}>Page2</td>
                        <td style={textStyle}>This is the seond page</td>
                        <td>
                            <span style={textStyle} className=" label label-draft">Draft</span>
                        </td>
                        <td >
                            <span style={textStyle}>
                                {/* <BsFillTrashFill/>
                            <BsFillPencilFill/> */}
                                test
                            </span>
                        </td>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <td style={textStyle}>Page3</td>
                        <td style={textStyle}>This is the third page</td>
                        <td>
                            <span style={textStyle} className=" label label-error">error</span>
                        </td>
                        <td>
                            <span style={textStyle}>
                                {/* <BsFillTrashFill/>
                            <BsFillPencilFill/> */}
                                test
                            </span>
                        </td>
                    </tr>
                </tbody>

            </table>
        </div>
    );
}