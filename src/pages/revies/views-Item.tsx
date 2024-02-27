import { Col, ColProps } from "antd";
import { FC } from "react";

interface Props {
  value?: string;
  label: string;
  colProps?: ColProps;
}

const ViewsItem: FC<Props> = ({ value, label, colProps }) => {
  const defaultColProps: ColProps = {
    xs: 24,
    sm: 8,
    md: 8,
    lg: 8,
    xl: 8,
    xxl: 6,
  };

  const mergedColProps: ColProps = { ...defaultColProps, ...colProps };

  return (
    <Col {...mergedColProps}>
      <div>
        <div className="text-[16px] opacity-[0.3] text-white">
          {label}
        </div>
        <div className="text-white">{value || "-"}</div>
      </div>
    </Col>
  );
};

export default ViewsItem;
