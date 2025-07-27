import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";
import { CODEFORCES_API_ENDPOINTS } from "@/utils/codeforces";
import axios from "axios";

export const CodeforcesLink = ({ onClose }: { onClose: () => void }) => {
    const [handle, setHandle] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async () => {
        if (!handle.trim()) return;
        setLoading(true);
        try {
            const res = await axios.get(CODEFORCES_API_ENDPOINTS.INFO, {
                params: { handles: handle },
            });
            console.log("User linked:", res.data.result[0]);
            setSuccess(true);
            setTimeout(onClose, 1500); 
        } catch (err) {
            console.error("Invalid handle or network error ",err);
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
                    Link Your Codeforces Account
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
                            placeholder="Enter your Codeforces handle"
                            value={handle}
                            onChange={(e) => setHandle(e.target.value)}
                            className="rounded-xl border-gray-300 focus:border-[#ff623f] focus:ring-[#ff623f]/20"
                        />
                        <Button
                            onClick={handleSubmit}
                            disabled={loading}
                            className="w-full rounded-xl"
                        >
                            {loading ? "Linking..." : "Submit"}
                        </Button>
                    </>
                )}
            </motion.div>
        </div>
    );
};
