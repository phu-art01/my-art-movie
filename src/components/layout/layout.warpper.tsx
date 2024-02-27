import clsx from "clsx"


const LayoutWrapper =({children,className}:{children:React.ReactElement | React.ReactElement[],className?:string}) =>{
    return(
        <div className={clsx("relative flex-auto box-border",className)}>
            {children}
        </div>
    )
}
export default LayoutWrapper;