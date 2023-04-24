import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import { useEffect, useState } from "react";

export default function CosUI(props) {
    const { auth } = usePage().props;
    const cos = JSON.parse(auth.user.json_config).UI.active;
    //const cos = "blade-1";
    const [type, setType] = useState(cos);
    //debuging
    const cosUI1 = JSON.parse(props.cos1);
    const cosUI2 = JSON.parse(props.cos2);

    useEffect(() => {
        try {
            let nump = `${props.label}1`;
            type == nump ? (nump = `${props.label}2`) : "";
            document.getElementById(`select-${type}${props.modal.split("-")[1]}`).style.border = "dashed black 3px";
            document.getElementById(`select-${nump}${props.modal.split("-")[1]}`).style.border = "none";
                if (type == cos) {
                    document.getElementById(`save-blade-num${props.modal.split("-")[1]}`).disabled = true;
                } else {
                    document.getElementById(`save-blade-num${props.modal.split("-")[1]}`).disabled = false;
                }
            console.log(type, cos);
        } catch (error) {
            console.log(error);
        }
    }, [type]);

    const hundelsave = () => {
        console.log("hundel save");
        console.log(type, cos);
        Inertia.post("/setting/set?is=ui", { data: type });
    };

    return (
        <div>
            <input type="checkbox" id={props.modal} className="modal-toggle" />
            <label htmlFor={props.modal} className="modal cursor-pointer" style={{ margin: 0, background: "#ffe1c38c" }}>
                <label className={`modal-box relative ${props.label === "edi" ? "bg-accent" : ""}`} htmlFor="">
                    <div className="w-full space-y-4">
                        <h3 className="text-2xl font-extrabold">
                            {props.header}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:space-x-3 space-x-0 space-y-3 sm:space-y-0 w-full">
                            <div
                                onClick={()=>setType(`${props.label}1`)}
                                id={`select-${props.label}1${props.modal.split("-")[1]}`}
                                className={`rounded-lg w-full space-y-3 p-4 px-6 flex flex-col items-center`}
                                style={{
                                    background: `linear-gradient(45deg,${cosUI1.bg},29%,${cosUI1.bg},29%,${cosUI1.profile.img.bg},50%,${cosUI1.profile.img.bg},50%,${cosUI1.draw.bg},72%,${cosUI1.draw.bg},72%,${cosUI1.links.grp.bg},86%,${cosUI1.links.grp.bg},86%,${cosUI1.links.bg})`,
                                }}
                            >
                                <div className="bg-yellow-400 p-4"></div>
                                <h4 className="text-xl font-bold">{props.label}-1</h4>
                            </div>

                            <div
                                onClick={()=>setType(`${props.label}2`)}
                                id={`select-${props.label}2${props.modal.split("-")[1]}`}
                                className={`rounded-lg w-full space-y-3 p-4 px-6 flex flex-col items-center`}
                                style={{
                                    background: `linear-gradient(45deg,${cosUI2.bg},29%,${cosUI2.bg},29%,${cosUI2.profile.img.bg},50%,${cosUI2.profile.img.bg},50%,${cosUI2.draw.bg},72%,${cosUI2.draw.bg},72%,${cosUI2.links.grp.bg},86%,${cosUI2.links.grp.bg},86%,${cosUI2.links.bg})`,
                                }}
                            >
                                <div className="bg-yellow-400 p-4"></div>
                                <h4 className="text-xl font-bold">{props.label}-2</h4>
                            </div>
                        </div>
                        <button
                            onClick={()=>hundelsave()}
                            id={`save-blade-num${props.modal.split("-")[1]}`}
                            className="btn"
                        >
                            save
                        </button>
                    </div>
                </label>
            </label>
        </div>
    );
}
