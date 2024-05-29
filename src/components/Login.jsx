import member_login from "../assets/member-login.jpg";
import LoginForm from "./LoginForm.jsx";

export default function Login() {
    return (
        <div className="relative h-screen">
            <div className="absolute inset-0">
                <img
                    src={member_login}
                    alt="No picture"
                    className="opacity-50 w-full h-full object-cover"
                />
            </div>
            <div className="relative z-10 flex items-center justify-center h-full">
                <LoginForm></LoginForm>
            </div>
        </div>
    );
}
