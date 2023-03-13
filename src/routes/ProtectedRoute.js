import { Navigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  if (!localStorage.getItem("@userLogin")) return <Navigate to="/login" />

  return props.children
}
export default ProtectedRoute