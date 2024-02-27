
const HeaderWarpper =({children}:{children:React.ReactElement | React.ReactElement[]}) =>{
    return(
        <div className="headeer-warper box-border">
            <div className="h-[80px] leading-[80px] block grow-0 shrink-0 basis-auto"></div>
            <div className="h-[80px] leading-[80px] p-0 w-full z-50 fixed right-0 top-0 grow-0 shrink-0 basis-auto overflow-hidden"
                style={{transition:'width .3s cubic-bezier(.645,.045,.335,1)'}}
            >
                <div className="min-h-full flex  bg-primary-bild">
                    {children}
                </div>

            </div>
        </div>
    )
}
export default HeaderWarpper