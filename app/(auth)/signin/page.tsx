'use client'
import Leaderboard from "@/components/Leaderboard";
import { Signin } from "@/components/Signin/Signin";

export default function SigninPage (){
    return(
        <div>
            <Signin />
            <Leaderboard />
        </div>
    )
}