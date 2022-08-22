import "./JsonBuilder.scss";

const prefix = "json-builder";
const rowPrefix = prefix + "-row";
const cellPrefix = rowPrefix + "__cell";
const cellTitlePrefix = cellPrefix + "-title";

export default function JsonBuilder(){
    return (
        <div className={prefix}>
            <div className={rowPrefix + " " + prefix + "-header"}>
                <div className={cellPrefix}>
                    <h1 className={cellTitlePrefix}>FIELD NAME</h1>
                </div>

                <div className={cellPrefix}>
                    <h1 className={cellTitlePrefix}>TYPE</h1>
                </div>

                <div className={cellPrefix}>
                    <h1 className={cellTitlePrefix}>GENERATION TYPE</h1>
                </div>

                <div className={cellPrefix}>
                    <h1 className={cellTitlePrefix}>VALUE</h1>
                </div>
            </div>
        </div>
    );
}