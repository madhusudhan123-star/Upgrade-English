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
// import { connectToDB } from "@/components/database";
// import User from "@/components/user";
// import { NextResponse } from 'next/server';
// import cors from 'cors';
// app.use(cors())


// export async function POST(request) {
//     try {
//         let data;
//         try {
//             data = await request.json();
//         } catch (error) {
//             throw new Error("Invalid JSON input");
//         }

//         const { email, message } = data;

//         await connectToDB();

//         const newUser = new User({ email, review: message });
//         await newUser.save();

//         return NextResponse.json({ message: "Review saved successfully" }, { status: 201 });
//     } catch (error) {
//         console.error("Error saving review:", error.message);
//         return NextResponse.json({ error: error.message || "Failed to save review" }, { status: 500 });
//     }
// }
import nodemailer from 'nodemailer';

export const dynamic = 'force-dynamic';

export async function POST(request) {
    try {
        // Parse the request body
        let data;
        try {
            data = await request.json();
        } catch (error) {
            return new Response(JSON.stringify({ error: "Invalid JSON input" }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const { email, message } = data;

        // Validate input
        if (!email || !message) {
            return new Response(JSON.stringify({ error: "Email and message are required" }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        // Create a nodemailer transporter
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            auth: {
                user: "dmadhusudhan98@gmail.com",
                pass: 'lfga pxgo yxmm lxqk',
            },
        });

        // Send email
        await transporter.sendMail({
            from: "dmadhusudhan98@gmail.com",
            to: "upgradeenglish63@gmail.com",
            subject: `New contact from ${email}`,
            text: `
        Email: ${email}
        Review: ${message}
      `,
            html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Review:</strong> ${message}</p>
      `,
        });

        return new Response(JSON.stringify({ message: "Email sent successfully" }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error("Error sending email:", error.message);
        return new Response(JSON.stringify({ error: "Failed to send email" }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}