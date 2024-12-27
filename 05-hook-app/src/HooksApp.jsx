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


const base = '/pruebas/hook-app';


export const HooksApp = () => {

    return (

        <div>

            <Headers />

            <Routes>

            <Route path={`${base}/pruebas/hook-app/`} element={<CounterApp />} />


                <Route path={`${base}/`} element={<CounterApp />} />
                <Route path={`${base}/counter-app`} element={<CounterApp />} />
                <Route path={`${base}/counter-with-custom-hook`} element={<CounterWithCustomHook />} />
                <Route path={`${base}/simple-form`} element={<SimpleForm />} />
                <Route path={`${base}/form-with-custom-hook`} element={<FormWithCustomHook />} />
                <Route path={`${base}/multiple-custom-hooks`} element={<MultipleCustomHooks />} />
                <Route path={`${base}/focus-screen`} element={<FocusScreen />} />
                <Route path={`${base}/layout`} element={<Layout />} />
                <Route path={`${base}/memorize`} element={<Memorize />} />
                <Route path={`${base}/memohook`} element={<MemorHook />} />
                <Route path={`${base}/callbackhook`} element={<CallbackHook />} />
                <Route path={`${base}/tarea-memo`} element={<Padre />} />

            </Routes>

                        

        </div>
    )
}
