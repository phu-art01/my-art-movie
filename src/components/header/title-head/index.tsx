import { Button, Col, Row, Space, Tag, Typography } from "antd";
import { CIcon } from "../../../assets/icons";
import clsx from "clsx";




interface Props {
    title: string;
    remark?: string;
    icon?: React.ReactNode;
    extraAction?: React.ReactNode | React.ReactNode[];
    onDownload?: VoidFunction;
    extraFormAction?: IExtraFormAction;
  }
  
  export interface IExtraFormAction {
    label: string;
    option: IExtraFormActionOption[];
    onClick: (item: IExtraFormActionOption) => void;
  }
  export interface IExtraFormActionOption {label:string; value:string; active?:boolean}

  const TitleHead = ({icon, remark, title, extraAction, extraFormAction, onDownload}:Props)=>{
    return(
        <Row justify="space-between" align="middle">
            <Col>
            <Space>
                {icon}
                <Typography.Title level={5} style={{margin:0}} className="!text-white">{title}</Typography.Title>
                {remark && <label className="opacity-[0.3]">{remark}</label>}
            </Space>
            </Col>
            <Col>
             <div className="flex items-center">
                {extraFormAction && 
                <Space size={5}>
                    <div>
                        {extraFormAction.label}
                    </div>
                    <div>
                        {extraFormAction.option.map((item,ind)=>(
                            <Tag key={ind} color={item.active?"blue-inverse":undefined} onClick={()=>extraFormAction.onClick({...item,active:!item.active})} className={clsx("hover:bg-gray-300 cursor-pointer active:bg-gray-50")}>{item.label}</Tag>
                        ))}
                    </div>
                </Space>
                }
                {!!onDownload && (
            <Button onClick={onDownload} icon={<CIcon.Excel />} />
          )}
          {!!extraAction && extraAction}
             </div>
            </Col>
            
        </Row>
    )
  }
  export default TitleHead;