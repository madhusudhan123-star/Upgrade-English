// import { connectToDB } from "@/components/database";
// import User from "@/components/user";
// import { NextResponse } from 'next/server';

// export async function POST(request) {
//     try {
//         const { email, message } = await request.json();

//         await connectToDB();

//         const newUser = new User({ email, review: message });
//         await newUser.save();

//         return NextResponse.json({ message: "Review saved successfully" }, { status: 201 });
//     } catch (error) {
//         console.error("Error saving review:", error.message);
//         return NextResponse.json({ error: error.message || "Failed to save review" }, { status: 500 });
//     }
// }
import { connectToDB } from "@/components/database";
import User from "@/components/user";
import { NextResponse } from 'next/server';
var cors = require('cors')
app.use(cors())


export async function POST(request) {
    try {
        let data;
        try {
            data = await request.json();
        } catch (error) {
            throw new Error("Invalid JSON input");
        }

        const { email, message } = data;

        await connectToDB();

        const newUser = new User({ email, review: message });
        await newUser.save();

        return NextResponse.json({ message: "Review saved successfully" }, { status: 201 });
    } catch (error) {
        console.error("Error saving review:", error.message);
        return NextResponse.json({ error: error.message || "Failed to save review" }, { status: 500 });
    }
}
