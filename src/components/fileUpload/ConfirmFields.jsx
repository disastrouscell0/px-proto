const CSVHeaders = ({ fields, fileID }) => {
    return fields && fields.map((field, i) => {
        return <option key={`${field}-${i}`} value={field}>{field}</option>;
    });
}

const ConfirmFields = ({ csvData, idHeaders, setIdHeaders }) => {
    const updateHeader = (key, value) => {
        setIdHeaders(prev => ({
            ...prev,
            [key]: value
        }));
    };

    return (
        <>
        <p>2. Confirm Fields</p>
        <div className="flex flex-col gap-0.5 px-2 py-3">
            <label className={`${idHeaders.responseIdHeader ? "text-green-700" : "text-red-800"}`}>Response ID:
                <select name="ID" id="ID" className="mx-3"
                        value={ idHeaders.responseIdHeader }
                        onChange={(e) => {updateHeader("responseIdHeader", e.target.value);}}>
                    { csvData && <CSVHeaders fields={ csvData.fields } fileID={ csvData.fileID } /> }
                </select>

            </label>
            <label className={`${idHeaders.tutorHeader ? "text-green-700" : "text-red-800"}`}>Tutor:
                <select name="tutor" id="tutor" className="mx-3" value={ idHeaders.tutorHeader }
                        onChange={(e) => {updateHeader("tutorHeader", e.target.value);}}>
                    { csvData && <CSVHeaders fields={ csvData.fields } fileID={ csvData.fileID } /> }
                </select>
            </label>
            <label className={`${idHeaders.placementHeader ? "text-green-700" : "text-red-800"}`}>Community Placement:
                <select name="placement" id="placement" className="mx-3" value={ idHeaders.placementHeader }
                        onChange={(e) => {updateHeader("placementHeader", e.target.value);}}>
                    { csvData && <CSVHeaders fields={ csvData.fields } fileID={ csvData.fileID } /> }
                </select>
            </label>
        </div>
        </>
    );
}
 
export default ConfirmFields;