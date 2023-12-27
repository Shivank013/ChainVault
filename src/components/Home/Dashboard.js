import { useAuthStatus } from "../../hooks/useAuthStatus";
import { useNavigate } from "react-router-dom";
import NotRegWarning from "./NotRegWarning";
import Noprofilewarning from "./Noprofilewarning";

function Dashboard() {
    const {isLoading, isAuthorized, username, status} = useAuthStatus();
    const navigate = useNavigate();

    if (isLoading) {
         return null;
    }

    if (!isAuthorized) {
        console.log("Not Registered")
        return <div><Noprofilewarning/></div>;
    }

    if (status == "NotApproved") {
        console.log("Not Registered")
        return <div><NotRegWarning/></div>;
    }

    if (username === 'goverment') {
        navigate('/dashboard/goverment');
        return null;
    } else if (username === 'institute') {
        navigate('/dashboard/institute');
        return null;
    } else {
        navigate('/dashboard/student');
        return null;
    }
}

export default Dashboard


