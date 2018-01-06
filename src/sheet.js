import React, { Component } from 'react';
import { connectToSpreadsheet } from "react-google-sheet-connector"

import ReactGoogleSheetConnector from "react-google-sheet-connector"

<ReactGoogleSheetConnector clientid={YOUR_CLIENT_ID}
    apiKey={YOUR_API_KEY}
    spreadsheetId={YOUR_SPREADSHEET_ID}
    spinner={ <div className="loading-spinner"/> } >
    <div>
    	This content will be rendered once the data has been fetched from the spreadsheet.
    </div>
</ReactGoogleSheetConnector>

const Sheet = (props) => {
    return (
        <div>
            {
                props.getSheet("Sheet Name")
                    .map((row, i) =>
                        JSON.stringify(row)
                    )
            }        
        </div>
    )
}


export default connectToSpreadsheet(Sheet) 
