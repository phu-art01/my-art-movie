import clsx from "clsx";
import { sidebarWidth } from "./sidebar.variable";

const SideBarWarper = ({ children, className }: { children: React.ReactElement | React.ReactElement[]; className?: string }) => {
  return (
    <div className={clsx(`sidebar box-border`, className)}>
      <div className={clsx(`flex box-border`, sidebarWidth)} style={{ transition: 'background-color 0.3s ease 0s, min-width 0.3s ease 0s, max-width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0s' }}></div>
      <div className={`overflow-hidden grow-0 shrink-0 basis-52 fixed top=0 left-0 h-full shadow-lg bg-gray-50 ${sidebarWidth}`} style={{ transition: 'all .2s' }}>
        <div className="flex flex-col h-full mt-20 justify-between">
          {children}
        </div>
      </div>
    </div>
  )
}

export default SideBarWarper;