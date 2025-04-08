import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
import Papa from 'papaparse';

export const config = {
    api: {
        bodyParser: false,
    },
};

const parseCSV = (results, file) => {
    console.log(`Removing record:`);
    console.log(results.data.splice(1, 1));

    const parseResults = {
        data: results.data,
        fields: results.meta.fields,
    };

    return parseResults;
}

export async function POST(request: NextRequest) {
    try {
        const data = await request.formData();
        const file: File | null = data.get("file") as unknown as File;
        const csvText = await file.text();
        let parseResults = {}

        await Papa.parse(csvText,
            {  header: true,
               preview: 5,
               complete: (results, file) => {parseResults = parseCSV(results, file)},
               error: (error, file) => {throw error.message;}
            }
        );

        parseResults["fileID"] = `${file.name}-${Date.now()}`;
        
        return NextResponse.json(JSON.stringify(parseResults), {status: 200});
    }   catch (e) {
        console.log(e);
        return NextResponse.json(
            {error: e.message},
            {status: 500}
        );
    }
}