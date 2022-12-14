export default function JsonBuilderHeader(){
    const rowPrefix = "json-builder-row__header";
    const cellPrefix = rowPrefix + "__cell";
    const cellTitlePrefix = cellPrefix + "-title";

    return (
        <>
            {
                ['FIELD NAME', 'TYPE','GENERATION TYPE', 'VALUE', 'OPTIONS', ''].map((title : string) => {
                    return (
                        <div 
                            className={cellPrefix} 
                            key={title}                                 
                            style={{
                                'borderRight': title !== '' ? '1px solid rgba(225,225,225,0.1)' : '',
                                'width' : title !== '' ? '100%' : '5%',
                                'minWidth' : title !== '' ? 'unset' : '5%'
                            }}
                        >
                            <h1 className={cellTitlePrefix}>{title}</h1>
                        </div>
                    )
                })
            }
        </>
    )
}