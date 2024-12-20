//  -----------------------------------------------------
//  ----------  /05-hook-app/src/HooksApp.jsx  ----------
//  -----------------------------------------------------


import { Route, Routes } from "react-router-dom";

import { Headers } from "@/components/Headers";
//import { NavBarLink } from "@/components/NavBarLink";

import { CounterApp } from "@/01-useState/CounterApp";
import { CounterWithCustomHook } from "@/01-useState/CounterWithCustomHook";
import { SimpleForm } from "@/02-useEffect/SimpleForm";
import { FormWithCustomHook } from "@/02-useEffect/FormWithCustomHook";
import { MultipleCustomHooks } from "@/03-example/MultipleCustomHooks";
import { FocusScreen } from "@/04-useRef/FocusScreen";
import { Layout } from "@/05-useLayoutEffect/Layout";
import { Memorize } from "@/06-memos/Memorize";
import { MemorHook } from "@/06-memos/MemoHook";
import { CallbackHook } from "@/06-memos/CallbackHook";
import { Padre } from "@/07-tarea-memo/Padre";


export const HooksApp = () => {

    return (

        <div>

            <Headers />

            <Routes>

                <Route path="/" element={<CounterApp />} />
                <Route path="/counter-app" element={<CounterApp />} />
                <Route path="/counter-with-custom-hook" element={<CounterWithCustomHook />} />
                <Route path="/simple-form" element={<SimpleForm />} />
                <Route path="/form-with-custom-hook" element={<FormWithCustomHook />} />
                <Route path="/multiple-custom-hooks" element={<MultipleCustomHooks />} />
                <Route path="/focus-screen" element={<FocusScreen />} />
                <Route path="/layout" element={<Layout />} />
                <Route path="/memorize" element={<Memorize />} />
                <Route path="/memohook" element={<MemorHook />} />
                <Route path="/callbackhook" element={<CallbackHook />} />
                <Route path="/tarea-memo" element={<Padre />} />

            </Routes>

                        

        </div>
    )
}
