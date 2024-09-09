import { Logo, RegisterContainer } from "./Register.style";
import skyrim from "../../assets/images/HUB.png";



const Register = () => {
    const [fromData, setFormData] = useState({
        fullname: "",
        email: "",
        username: "",
        password: ""
    });

    
    const handleSubmit = (e) => { 
  
    };
    
    return (
        <RegisterContainer>
            <Logo src={skyrim} alt="Skyrim"/>
            <from onSubmit={handleSubmit}>
                <input type="text" placeholder="Full name"  />
            </from>
        </RegisterContainer>
    )
};

export default Register;