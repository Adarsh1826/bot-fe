'use client'
import { Signin } from "@/components/Signin/Signin";
import Leaderboard from "@/components/Leaderboard";

export default function SigninPage (){
    return(
        <div>
            <Signin />
            <Leaderboard />
        </div>
    )
}