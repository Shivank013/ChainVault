// import { useAuthStatus } from "../../../hooks/useAuthStatus";
import { useAuthStatus } from "../../hooks/useAuthStatus";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const {isLoading, isAuthorized, username, email, id} = useAuthStatus();
    const navigate = useNavigate();

    if (isLoading) {
         return null;
    }

    if (!isAuthorized) {
        return <div>You are not registered</div>;
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


