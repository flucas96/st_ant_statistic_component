import React, { useEffect } from "react";
import { Statistic, Card } from 'antd';
import CountUp from 'react-countup';
import { ComponentProps, Streamlit, withStreamlitConnection } from "streamlit-component-lib";
import { Helmet } from 'react-helmet';

interface StatisticProps {
  title: string,
  value: string | number,
  prefix: string,
  suffix: string,
  precision: number,
  loading: boolean,
  decimalSeperator: string,
  groupSeperator: string,
  valueStyle: object,
  titleStyle: object,
  cardStyle: object,
  card: boolean,
  key: string,
  height: number,
  loadingAnimation: boolean,
  loadingDuration: number,
  card_bordered: boolean,
  card_hoverable: boolean,
  classStatistic: string,
  classTitle: string,
  classCard: string,
  alignValue: 'left' | 'right' | 'center',
  alignTitle: 'left' | 'right' | 'center',
  custom_font_awesome_url: string,
}

const StatisticComponent = (props: ComponentProps) => {
  const { args } = props;

  const {
    title,
    value,
    prefix,
    suffix,
    precision,
    loading,
    decimalSeperator,
    groupSeperator,
    valueStyle,
    titleStyle,
    cardStyle,
    card,
    height,
    loadingAnimation,
    loadingDuration,
    card_bordered,
    card_hoverable,
    classStatistic,
    classTitle,
    classCard,
    alignValue,
    alignTitle,
    custom_font_awesome_url,
  }: StatisticProps = args;

  const formatter = (value: number | string) => {
    if (typeof value === 'string') {
      return value;
    } else if (loadingAnimation) {
      return (
        <CountUp
          end={value}
          separator={groupSeperator}
          decimals={precision}
          duration={loadingDuration}
        />
      );
    } else {
      return Number(value).toFixed(precision); // apply precision when not animating
    }
  };

  // Send back a response to Streamlit
  useEffect(() => {
    Streamlit.setFrameHeight(height);
    Streamlit.setComponentReady();
  }, [height]);

  if (card) {
    return (
        <Card style={cardStyle} bordered={card_bordered} hoverable={card_hoverable} className={classCard}>
          <Helmet>
            <script
              src={custom_font_awesome_url}
              crossOrigin="anonymous"
              id="font-awesome-icons"
            />
          </Helmet>
          <Statistic
            className={classStatistic}
            title={<div className={classTitle} dangerouslySetInnerHTML={{__html: title}} style={titleStyle} />}
            value={value} // casting to any type
            prefix={prefix && <div dangerouslySetInnerHTML={{__html: prefix}} />}
            suffix={suffix && <div dangerouslySetInnerHTML={{__html: suffix}} />}
            precision={precision}
            loading={loading}
            decimalSeparator={decimalSeperator}
            groupSeparator={groupSeperator}
            valueStyle={{ ...valueStyle, textAlign: alignValue }}
            formatter={formatter}
          />
        </Card>
    );
  } else {
    return (
      <>
        <Helmet>
            <script
              src={custom_font_awesome_url}
              crossOrigin="anonymous"
              id="font-awesome-icons"
            />
        </Helmet>
          <Statistic
            className={classStatistic}
            title={
              <div 
                className={classTitle} 
                dangerouslySetInnerHTML={{__html: title}} 
                style={{ ...titleStyle, textAlign: alignTitle }}
              />
            }
            value={value} // casting to any type
            prefix={prefix && <div dangerouslySetInnerHTML={{__html: prefix}} />}
            suffix={suffix && <div dangerouslySetInnerHTML={{__html: suffix}} />}
            precision={precision}
            loading={loading}
            decimalSeparator={decimalSeperator}
            groupSeparator={groupSeperator}
            valueStyle={{ ...valueStyle, textAlign: alignValue }}
            formatter={formatter}
          />
      </>
    );
};
}

export default withStreamlitConnection(StatisticComponent);