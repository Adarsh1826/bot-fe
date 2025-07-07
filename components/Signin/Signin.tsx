import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { FcGoogle } from "react-icons/fc"; 

export const Signin = ({
  showForm,
  setShowForm,
}: {
  showForm: boolean;
  setShowForm: (value: boolean) => void;
}) => {
  if (!showForm) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Sign In</h2>

        <form className="space-y-4">
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button className="w-full">Sign In</Button>
        </form>

        <div className="my-4 flex items-center justify-center">
          <span className="text-gray-500 text-sm">or continue with</span>
        </div>

        {/* Google Login */}
        <Button variant="outline" className="w-full flex items-center justify-center gap-2">
          <FcGoogle className="w-5 h-5" />
          <span>Sign in with Google</span>
        </Button>

        {/* Bottom Actions */}
        <div className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?
          <button
            onClick={() => alert("Redirect to Sign Up page")}
            className="text-blue-600 hover:underline ml-1"
          >
            Sign Up
          </button>
        </div>

        <div className="mt-2 text-center">
          <Button
            variant="ghost"
            onClick={() => setShowForm(false)}
            className="text-gray-500"
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};
