import { Auth } from "aws-amplify";

export default function Logout(props) {
	async function logout() {
	  await Auth.signOut();
	  //Redirect back to login page after logout
	  props.history.push("/login");
	}
	logout();
	return true;
}