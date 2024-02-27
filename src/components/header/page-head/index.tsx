import { Breadcrumb, Button, Col, Row, Typography } from 'antd';
import { BreadcrumbItemType, BreadcrumbSeparatorType } from 'antd/es/breadcrumb/Breadcrumb';

interface Props {
  title: string;
  breadcrumb?: Partial<BreadcrumbItemType & BreadcrumbSeparatorType>[];
  action?: {
    title: string;
    type?: "link" | "text" | "primary" | "default" | "dashed"
    onClick: VoidFunction;
  }
  extraAction?: React.ReactNode | React.ReactNode[];
}

const PageHead = ({ title, breadcrumb, extraAction, action }: Props) => {
  return (
    <Row justify="space-between" align="middle" className='mb-6'>
      <Col>
        <Typography.Title level={2} style={{ margin: 0 }} className="!text-amber-800">{title}</Typography.Title>
        {!!breadcrumb && <Breadcrumb items={breadcrumb} style={{ marginTop: -10 }} />}
      </Col>
      <Col>
        {!!action && (<Button size="large" type={action.type || "primary"} className='primary w-min' onClick={action.onClick}>{action.title}</Button>)}
        {!!extraAction && extraAction}
      </Col>
    </Row>
  )
}

export default PageHead