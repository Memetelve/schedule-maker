import React from "react";
import { redirect } from 'next/navigation'

export default function Page() {


    // return redirect to another page
    return redirect("/main");
}
