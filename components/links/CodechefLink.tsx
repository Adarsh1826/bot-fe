import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";
import axios from "axios";
import { CODECHEF_API_ENDPOINTS } from "@/utils/codechef";

export const CodechefLink = ({ onClose }: { onClose: () => void }) => {
    const [username, setUsername] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async () => {
        if (!username.trim()) return;
        setLoading(true);
        try {
            const res = await axios.get(`${CODECHEF_API_ENDPOINTS.INFO}/${username}`);
            if (res.data.status === "Success") {
                console.log("User linked:", res.data);
                setSuccess(true);
                setTimeout(onClose, 1500);
            } else {
                throw new Error("Invalid username");
            }
        } catch (err) {
            console.error("Invalid username or network error", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative w-full max-w-sm bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl p-6 space-y-4"
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition"
                >
                    <X className="w-5 h-5" />
                </button>

                <h2 className="text-xl font-semibold text-center text-gray-800 dark:text-gray-100">
                    Link Your CodeChef Account
                </h2>

                {success ? (
                    <div className="flex flex-col items-center justify-center gap-2 py-6">
                        <CheckCircle2 className="w-10 h-10 text-green-500" />
                        <p className="text-green-600 font-medium">
                            Linked successfully!
                        </p>
                    </div>
                ) : (
                    <>
                        <Input
                            placeholder="Enter your CodeChef username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="rounded-xl border-gray-300 focus:border-[#ff623f] focus:ring-[#ff623f]/20"
                        />
                        <div className="flex justify-between">
                            <Button onClick={onClose} variant="destructive">
                                Close
                            </Button>
                            <Button
                                onClick={handleSubmit}
                                disabled={loading}
                            >
                                {loading ? "Linking..." : "Submit"}
                            </Button>
                        </div>
                    </>
                )}
            </motion.div>
        </div>
    );
};
