//  -----------------------------------------------------
//  ----------  /05-hook-app/src/HooksApp.jsx  ----------
//  -----------------------------------------------------


import { Route, Routes } from "react-router-dom";

import { Headers } from "@/components/Headers";
import { NavBarLink } from "@/components/NavBarLink";

import { CounterApp } from "@/01-useState/CounterApp";
import { CounterWithCustomHook } from "@/01-useState/CounterWithCustomHook";
import { SimpleForm } from "@/02-useEffect/SimpleForm";
import { FormWithCustomHook } from "@/02-useEffect/FormWithCustomHook";
import { MultipleCustomHooks } from "@/03-example/MultipleCustomHooks";


export const HooksApp = () => {

    return (

        <div>

            <Headers />

            <NavBarLink />

            <Routes>

                <Route path="/counter-app" element={<CounterApp />} />
                <Route path="/counter-with-custom-hook" element={<CounterWithCustomHook />} />
                <Route path="/simple-form" element={<SimpleForm />} />
                <Route path="/form-with-custom-hook" element={<FormWithCustomHook />} />

            </Routes>

            <MultipleCustomHooks />
            

        </div>
    )
}
