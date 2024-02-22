import type { APIRoute } from "astro"
import nodemailer from "nodemailer"
import dotenv from "dotenv"
dotenv.config()
export const POST: APIRoute =async ({ request,redirect }) => {
    const data = request.formData()
    const email= ((await data).get('email'))?.toString()
    const message= ((await data).get('Message'))?.toString()
    const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.USER,
        pass: process.env.PASS_KEY,
    }
});
    try {
          await transporter.sendMail({
              from: email,
              to: "shikamusenge720@gmail.com",
              subject: `${email?.slice(0,20)}`,
              text: message,
          });
        return redirect("/");

    } catch (error) {
        console.log(error);
        return new Response(null, { status: 404 });   
    }  
}