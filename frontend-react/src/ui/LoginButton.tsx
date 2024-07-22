import Button from "./Button.tsx";

interface LoginButtonProps {
    loginData?: { username: string, password: string };

}

const LoginButton: React.FC<LoginButtonProps> = ({loginData}) => {

    const handleFetch = async () => {
        try {
            const response = await fetch('http://localhost:8080/authAndGenerateToken', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
                credentials: "include",
            });

            if (response.ok) {
                localStorage.setItem("JWT", await response.text());
                window.location.reload();
            } else {
                console.error(response);
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    }
    return (
        <Button title="Přihlásit se" path={"/"} onClick={handleFetch}/>
    );
};
export default LoginButton;