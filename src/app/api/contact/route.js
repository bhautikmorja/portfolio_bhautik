import { NextResponse } from "next/server";
import { DATA } from "@/models/Data";
import { chk_email, validate_string } from "@/utils/common";
import connectToDatabase from "@/utils/dbconnect";

export async function POST(request) {
    try {
        await connectToDatabase();
        const data = await request.json();
        try {
            validate_string(data.name, "name")
            validate_string(data.email, "email")
            chk_email(data.email)
            validate_string(data.message, "message")
        } catch (error) {
            return NextResponse.json({ message: error.message }, { statusCode: 400 });
        }
        await DATA.create(data);
        return NextResponse.json({ message: "Contact form submitted successfully" });
    } catch (e) {
        console.log("e ==>", e)
        return NextResponse.json({ message: "Something went wrong, please try again later." }, { statusCode: 500 });
    }

}